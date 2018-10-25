import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input()
  public query: String = '';
  public autoList: any = [];
  public movieList: any = [];
  public id: any;

  constructor( public moviesService: MoviesService) { }

  ngOnInit() {
   }

  public getquery(query: any) {
    this.moviesService.getMovies(this.query).then(movie => {
      this.autoList = [];
      this.autoList = movie['Search'];
    });
  }

  public view(id) {
    console.log(id);
    this.moviesService.getInfoMovie(this.id).then(movie => {
      this.movieList = movie['Search'];
      console.log(this.movieList);
    });
  }

}
