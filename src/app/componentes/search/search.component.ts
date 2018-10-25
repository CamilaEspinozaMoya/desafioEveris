import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { TwitterService } from "../../services/twitter.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input()
  public query: String = '';
  public autoList: any = [];
  public id: any;
  public moviesInfo: any;

  constructor( public moviesService: MoviesService, twitterService: TwitterService) { }

  ngOnInit() {
   }

  public getquery(query: any) {
    this.moviesService.getMovies(this.query).then(movie => {
      this.autoList = [];
      this.autoList = movie['Search'];
    });
  }

  public viewCard(id) {
    this.moviesService.getInfoMovie(id)
    .subscribe((resp: any) => {
      this.moviesInfo = Object.values(resp);
      console.log(this.moviesInfo);
    });
  }


}
