import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public myControl = new FormControl();

  @Input()
  public query = '';
  public auto: any;

  constructor( public moviesService: MoviesService) { }

  ngOnInit() {
   }

  public getquery(query: any) {
    this.moviesService.getMovies(this.query).then(movie => {

    })
  }




}
