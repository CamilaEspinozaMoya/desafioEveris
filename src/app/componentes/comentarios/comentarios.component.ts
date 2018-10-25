import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  items: any;

  editarItem: any = {
    name: '',

  authForm: FormGroup
  };

  constructor(
    private conexion: ConexionService,
    formBuilder: FormBuilder,
    public authService: AuthService,
    public snackBar: MatSnackBar,
    private router: Router) {
    this.conexion.publicacionesItem().subscribe( item => {
      this.items = item;
      console.log(this.items);
    });
  }

  ngOnInit() {
  }

  eliminar(item) {
    if (confirm('¿Quieres eliminar esta publicación?')) {
    this.conexion.eliminarItem(item);
  }
}

  editar(item) {
    this.editarItem = item;
  }

  guardarItemEditado() {
    this.conexion.EditarItem(this.editarItem);
  }
}

