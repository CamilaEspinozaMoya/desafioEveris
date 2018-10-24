import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {
  Title: any;
  Poster: any;
  Genre: any;
  Director: any;
  $key: string;
  constructor() { }
}
