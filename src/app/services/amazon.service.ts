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

  public getTAmazon(title) {
    this.replace = title.replace(' ', '-');
    this.url = `https://www.amazon.com/${this.replace}/dp/B07DQMJBHS/`;
    console.log(this.url);
  }
}
