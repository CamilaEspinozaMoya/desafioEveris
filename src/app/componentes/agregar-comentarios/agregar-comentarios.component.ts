import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/services/conexion.service'
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-agregar-comentarios',
  templateUrl: './agregar-comentarios.component.html',
  styleUrls: ['./agregar-comentarios.component.css']
})
export class AgregarComentariosComponent implements OnInit {
  authForm: FormGroup;
  item: any = {
    name: '',
  }

  constructor(private servicio: ConexionService) { }

  ngOnInit() {
  }

  agregar() {
    this.servicio.addItem(this.item);
    this.item.name = '';
  }
}
