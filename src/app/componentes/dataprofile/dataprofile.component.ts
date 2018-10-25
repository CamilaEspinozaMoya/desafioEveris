import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-dataprofile',
  templateUrl: './dataprofile.component.html',
  styleUrls: ['./dataprofile.component.css']
})
export class DataprofileComponent implements OnInit {
  userName: any;
  photo: any;
  email: any;

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userName = user.displayName;
        this.photo = user.photoURL;
        this.email = user.email;
      }
    });
  }

  ngOnInit() {
  }

}
