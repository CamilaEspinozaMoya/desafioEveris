import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireList } from '@angular/fire/database';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authForm: FormGroup;
  public email: string;
  public password: string;
  authList$: AngularFireList<any>;

  constructor(public formBuilder: FormBuilder,
  public authService: AuthService,
  public snackBar: MatSnackBar,
  public firebaseAuth: AngularFireAuth,
  public database: AngularFireDatabase) {
    const user = this.firebaseAuth.auth.currentUser;
    this.createAuthForm();
    this.authList$ = this.database.list('/auth');
   }

  ngOnInit() {
  }

  createAuthForm() {
    this.authForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });
  }

  onRegister() {
    this.authService.signup(this.authForm.value.email, this.authForm.value.password)
      .then(value => {
        console.log('Se ha registrado con éxito', value);
      })
      .catch(() => {
      });
  }

  addAuth() {
    const newAuth = {
      email: this.authForm.value.email,
      password: this.authForm.value.password,
    };
    this.authList$.push(newAuth);
    console.log('agregado nuevo voluntario');
  }

  onLogin() {
    this.authService.login(this.authForm.value.email, this.authForm.value.password)
      .then(() => {
      })
      .catch(() => {

      });
  }

  onLogout() {
    this.authService.logout()
      .then(() => {
      })
      .catch(() => {
        this.snackBar.open('Error al tratar de cerrar sesión, trata otra vez'
          , null/*No necesitamos botón en el aviso*/
          , {
            duration: 3000
          });
      });
  }

  onClickGoogleLogin() {
    this.authService.loginGoogle()
    .then((res) => {
      console.log('Autentificación con Google exitosa');
      console.log(res);
    }).catch(err => console.log(err.message));
  }

  onClickFacebookLogin() {
    this.authService.loginFacebook()
    .then((res) => {
      console.log(res);
    }).catch(err => console.log(err.message));
  }

  submit() {
    // this.addAuth();
     this.onRegister();
     }

}
