import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashComponent } from './componentes/splash/splash.component';
import { LoginComponent } from './componentes/login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ComentariosComponent } from './componentes/comentarios/comentarios.component';
import { ConexionService} from './services/services/conexion.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AgregarComentariosComponent } from './componentes/agregar-comentarios/agregar-comentarios.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';


const appRoutes: Routes = [
  {
    path: '',
    component: SplashComponent,

  },
  {
    path: 'home',
    component: HomeComponent,

  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'comentarios',
    component: AgregarComentariosComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    LoginComponent,
    ComentariosComponent,
    AgregarComentariosComponent
    HomeComponent,
    ToolbarComponent,
    ComentariosComponent,
    CarruselComponent,
    PerfilComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp (environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    MatSnackBarModule,
  ],
  providers: [AuthService, ConexionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

