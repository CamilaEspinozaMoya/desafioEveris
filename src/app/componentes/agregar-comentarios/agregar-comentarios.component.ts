import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-agregar-comentarios',
  templateUrl: './agregar-comentarios.component.html',
  styleUrls: ['./agregar-comentarios.component.css']
})
export class AgregarComentariosComponent implements OnInit {
  authForm: FormGroup;
  item: any = {
    name: '',
  };

  constructor(private servicio: ConexionService, public authservice: AuthService) { }

  ngOnInit() {
  }

  agregar() {
    this.servicio.addItem(this.item);
    this.item.name = '';
  }
}
