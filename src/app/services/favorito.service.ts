import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {
  public users$: Observable<firebase.User>;
  public userDetails$: firebase.User = null;
  public user: string;
  public movieInfo: any;
  public favList: any;
  public viewList: any;
  public watchList: any;
  public path: any;

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

  public newViewed(movieInfo)  {
    this.user = this.fbAuth.auth.currentUser.uid;
    const newMovieFav = {
      title: movieInfo[0],
      year: movieInfo[1],
      sinopsis: movieInfo[9],
      poster: movieInfo[13]
    };
    this.db.list(`viewed/${this.user}/`).push(newMovieFav);
    console.log('Viewed added.');
  }

  public newToWatch(movieInfo)  {
    this.user = this.fbAuth.auth.currentUser.uid;
    const newMovieFav = {
      title: movieInfo[0],
      year: movieInfo[1],
      sinopsis: movieInfo[9],
      poster: movieInfo[13]
    };
    this.db.list(`towatch/${this.user}/`).push(newMovieFav);
    console.log('To Watch added.');
  }

  public getFav() {
    this.user = this.fbAuth.auth.currentUser.uid;
    this.db.list(`favorites/${this.user}`).snapshotChanges()
    .pipe(map(
      snapshot => {
        const result = [];
        for (let i = 0; i < snapshot.length; i++) {
          const favVal = snapshot[i].payload.val();
          favVal['$key'] = snapshot[i].payload.key; // add $key
          result.push(favVal);
        } return result;
      }))
    .subscribe((resp: any) => {
      this.favList = Object.values(resp); // make it readable
      console.log(this.favList);
    });
  }

  public getView() {
    this.user = this.fbAuth.auth.currentUser.uid;
    this.db.list(`viewed/${this.user}`).snapshotChanges()
    .pipe(map(
      snapshot => {
        const result = [];
        for (let i = 0; i < snapshot.length; i++) {
          const viewVal = snapshot[i].payload.val();
          viewVal['$key'] = snapshot[i].payload.key; // add $key
          result.push(viewVal);
        } return result;
      }))
    .subscribe((resp: any) => {
      this.viewList = Object.values(resp); // make it readable
    });
  }

  public getWatch() {
    this.user = this.fbAuth.auth.currentUser.uid;
    this.db.list(`towatch/${this.user}`).snapshotChanges()
    .pipe(map(
      snapshot => {
        const result = [];
        for (let i = 0; i < snapshot.length; i++) {
          const watchVal = snapshot[i].payload.val();
          watchVal['$key'] = snapshot[i].payload.key; // add $key
          result.push(watchVal);
        } return result;
      }))
    .subscribe((resp: any) => {
      this.watchList = Object.values(resp); // make it readable
    });
  }

  deleteFav(dataId) {
    this.path = this.db.list(`favorites/${this.fbAuth.auth.currentUser.uid}/${dataId}`).remove();
    console.log('Fav removed.');
  }

  deleteView(dataId) {
    this.path = this.db.list(`viewed/${this.fbAuth.auth.currentUser.uid}/${dataId}`).remove();
    console.log('View removed.');
  }

  deleteWatch(dataId) {
    this.path = this.db.list(`towatch/${this.fbAuth.auth.currentUser.uid}/${dataId}`).remove();
    console.log('Watch removed.');
  }

}
