import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { FavoritoService } from '../../services/favorito.service';
import { AmazonService } from '../../services/amazon.service';




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
  public finder: any;
  public tweetList: any;

  constructor(
    public moviesService: MoviesService,
    public favoritos: FavoritoService,
    public db: AngularFireDatabase,
    public as: AmazonService) { }

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

  public addFav(movieInfo) {
    this.favoritos.newFav(movieInfo);
  }

  public addViewed(movieInfo) {
    this.favoritos.newViewed(movieInfo);
  }

  public addToWatch(movieInfo) {
    this.favoritos.newToWatch(movieInfo);
  }

  // public amazon(title) {
  //   this.as.getTAmazon(title);
  // }

}
