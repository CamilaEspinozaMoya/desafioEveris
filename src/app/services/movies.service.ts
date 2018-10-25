import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Movies } from '../interfaces/movies.interface';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {
public movies: any;

  constructor(public http: HttpClient) { }

 public getMovies(query) {
    return new Promise( (resolve, reject) => {
      this.http.get(`http://www.omdbapi.com/?apikey=d1ab6f3c&s=${query}`)
      .subscribe((resp: any) => {
        this.movies = Object.values(resp);
        resolve(resp);
      });
    });
  }

  public getInfoMovie(id) {
    return new Promise( (resolve, reject) => {
      this.http.get(`http://www.omdbapi.com/?apikey=d1ab6f3c&i=${id}`)
      .subscribe((resp: any) => {
        this.movies = Object.values(resp);
        console.log(resp);
        resolve(resp);
      });
    });
  }

  /*
  getMovies(query: string) {
    console.log(query);
    this.http.get(`http://www.omdbapi.com/?apikey=d1ab6f3c&t=${query}`)
    .subscribe((resp: Movies) => {
      this.movies = resp;
      console.log(this.movies);
    });
  }*/
}
