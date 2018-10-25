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
export class FavoritoService {
  public users$: Observable<firebase.User>;
  public userDetails$: firebase.User = null;
  public user: string;
  public movieInfo: any;


  constructor(public db: AngularFireDatabase, public fbAuth: AngularFireAuth) {
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

  public newFav(movieInfo)  {
    this.user = this.fbAuth.auth.currentUser.uid;
    const newMovieFav = {
      title: movieInfo[0],
      year: movieInfo[1],
      sinopsis: movieInfo[9],
      poster: movieInfo[13]
    };
    this.db.list(`favorites/${this.user}/`).push(newMovieFav);
    console.log('Fav added.');
  }
}
