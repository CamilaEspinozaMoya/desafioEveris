import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Movies } from '../interfaces/movies.interface';

export interface MoviesData {
  title: any;
  poster: any;
  genre: any;
  director: any;
  $key: string;
}
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  public users$: Observable<firebase.User>;
  public userDetails$: firebase.User = null;
  public user: string;
  public movie: Movies;
  public favoritoData: any;
  public path: any;
  public favoritoList: any;

  constructor(private db: AngularFireDatabase, private fbAuth: AngularFireAuth) {
    this.users$ = fbAuth.authState;
    this.users$.subscribe(
    (user) => {
      if (user) {
        this.userDetails$ = user;
      } else {
        this.userDetails$ = null;
      }
    });
  }

  getItems() {
    this.user = this.fbAuth.auth.currentUser.uid;
    this.db.list(`items/${this.user}`).snapshotChanges()
    .pipe(map(
      snapshot => {
        const result = [];
        for (let i = 0; i < snapshot.length; i++) {
          const favoritoVal = snapshot[i].payload.val();
          favoritoVal['$key'] = snapshot[i].payload.key; // add $key
          result.push(favoritoVal);
        } return result;
      }))
    .subscribe((resp: any) => {
      this.favoritoList = Object.values(resp); // make it readable
    });
  }

  // Add favorite
  createItem(movie: any)  {
    this.user = this.fbAuth.auth.currentUser.uid;
    const favoritoData = {
      Title: movie.Title,
      Poster: movie.Poster
    };
    this.db.list(`items/${this.user}/`).push(favoritoData);
    console.log('Fav added.');
  }

    // Delete Favorite
    deleteItem(dataId) {
      this.path = this.db.list(`items/${this.fbAuth.auth.currentUser.uid}/${dataId}`).remove();
      console.log('Fav removed.');
    }
}
