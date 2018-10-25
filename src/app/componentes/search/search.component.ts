import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { FavoritoService } from '../../services/favorito.service';
// import { HttpClient } from '@angular/common/http';



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

  constructor( public moviesService: MoviesService, public favoritos: FavoritoService, public db: AngularFireDatabase) { }

  ngOnInit() {
    // let response = this.http.get(' https://api.twitter.com/1.1/search/tweets.json?q=%23freebandnames')
    // response.subscribe((response)=>console.log(response))
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
    });
  }

  public addFav(movieInfo) {
    this.favoritos.newFav(movieInfo);
  }

  public addViewed(movieInfo) {
    this.favoritos.newViewed(movieInfo);
  }

  public addToWatch(movieInfo) {
    this.favoritos.newToWatch(movieInfo);
  }


}
