import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TwitterService {
public twitter: any;
public finder: any;

  constructor(public http: HttpClient) { }

  public getTwitter(finder) {
    return new Promise( (resolve, reject) => {
      this.http.get(`https://api.twitter.com/1.1/search/tweets.json?q=%23${finder}&result_type=recent`)
    .subscribe((resp: any) => {
      this.twitter = Object.values(resp);
      resolve(resp);      
      console.log(finder);
      
      
    });
    });
  }
}

