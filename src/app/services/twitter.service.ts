import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class TwitterService {
public twitter: any;

  constructor(public http: HttpClient) { }

  public getHashtags(query) {
    return new Promise( (resolve, reject) => {
      this.http.get('https://api.twitter.com/1.1/search/tweets.json?q=%23${query}')
    .subscribe((resp: any) => {
      this.twitter = Object.values(resp);
      resolve(resp);
    });
    });
  }
}

