import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input()
  public query: String = '';
  public autoList: any = [];
  public selected: any;

  constructor( public moviesService: MoviesService) { }

  ngOnInit() {
   }

  public getquery(query: any) {
    this.moviesService.getMovies(this.query).then(movie => {
      this.autoList = [];
      this.autoList = movie['Search'];
    });
  }




}
