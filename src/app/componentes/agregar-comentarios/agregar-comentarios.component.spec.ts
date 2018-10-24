import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarComentariosComponent } from './agregar-comentarios.component';

describe('AgregarComentariosComponent', () => {
  let component: AgregarComentariosComponent;
  let fixture: ComponentFixture<AgregarComentariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarComentariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
