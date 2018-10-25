import { Component, OnInit } from '@angular/core';
import { InitParams, FacebookService, UIParams, UIResponse } from 'ngx-facebook';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {

 
  constructor(private _fb: FacebookService) {
    let initParams: InitParams = {
      appId: '196235457945266',
      xfbml: true,
      version: 'v3.2'
    };
    _fb.init(initParams);
  }

  ngOnInit() {
  
  }

  public share() {
    let uiParams: UIParams = {
      method: 'feed',
      display: 'popup',
      link: 'http://www.google.cl'
    };
    this._fb.ui(uiParams)
    .then((response: UIResponse) => {

    })
    .catch((error: any) => {

    });
  }
}
