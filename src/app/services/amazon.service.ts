import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AmazonService {
public title: any;
public replace: any;
public url: string;

  constructor(public http: HttpClient) { }

  public getAmazon(title) {
    this.replace = title.replace(' ', '-');
    this.url = `https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Dmovies-tv-intl-ship&field-keywords=${this.replace}`;
    console.log(this.url);
  }
}
