import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { DataprofileComponent } from './dataprofile.component';

describe('DataprofileComponent', () => {
  let component: DataprofileComponent;
  let fixture: ComponentFixture<DataprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
