import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {
  
  userName: any;

  constructor(public afAuth: AngularFireAuth) { 
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userName = user.displayName;
      }
    });
  }
  
  ngOnInit() {
  }

}
