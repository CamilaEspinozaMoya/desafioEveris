import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

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
    return this.http.get(`http://www.omdbapi.com/?apikey=d1ab6f3c&i=${id}`);
  }

}
