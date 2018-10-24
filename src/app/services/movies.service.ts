import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Movies } from '../interfaces/movies.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
public movies: Movies;
  constructor(public http: HttpClient) { }

  getMovies() {
    this.http.get('http://www.omdbapi.com/?i=tt3896198&apikey=d1ab6f3c&t=nemo')
    .subscribe((resp: Movies) => {
      this.movies = resp;
      console.log(this.movies);
    });

  }
}
