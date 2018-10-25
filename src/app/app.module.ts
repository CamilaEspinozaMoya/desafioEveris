import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { SplashComponent } from './componentes/splash/splash.component';
import { LoginComponent } from './componentes/login/login.component';
import { SearchComponent } from './componentes/search/search.component';
import { ComentariosComponent } from './componentes/comentarios/comentarios.component';
import { ConexionService} from './services/services/conexion.service';
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
import { FavoritosComponent } from './componentes/favoritos/favoritos.component';
import { DataprofileComponent } from './componentes/dataprofile/dataprofile.component';

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
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  }
];



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SplashComponent,
    LoginComponent,
    ComentariosComponent,
    AgregarComentariosComponent,
    HomeComponent,
    ToolbarComponent,
    ComentariosComponent,
    CarruselComponent,
    PerfilComponent,
    FavoritosComponent,
    DataprofileComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    JsonpModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp (environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    MatSnackBarModule,
  ],
  providers: [AuthService, ConexionService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

