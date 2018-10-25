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
    return this.http.get(`https://twitter.com/search?q=%23${finder}`);
  }
}

