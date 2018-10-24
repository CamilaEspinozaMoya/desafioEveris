import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

  constructor(private router:Router) { 
    setTimeout(() => {
      this.router.navigate(['home'])
    }, 2000);
  }

  ngOnInit() {
  }

}
