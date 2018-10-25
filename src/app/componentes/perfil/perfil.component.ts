import { Component, OnInit } from '@angular/core';
import { FavoritoService } from '../../services/favorito.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
public favList: any;
public viewed: any;
public toWatch: any;
public visib = true;

  constructor( public favsService: FavoritoService) {
    this.favsService.getFav();
    this.favsService.getView();
    this.favsService.getWatch();
  }

  ngOnInit() {
  }

}
