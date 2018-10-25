import { Component, OnInit } from '@angular/core';
import { FavoritoService } from '../../services/favorito.service';
import { AmazonService } from '../../services/amazon.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
public favList: any;
public viewed: any;
public toWatch: any;


  constructor( public favsService: FavoritoService, public amazon: AmazonService) {
    this.favsService.getFav();
    this.favsService.getView();
    this.favsService.getWatch();
  }

  ngOnInit() {
  }

}
