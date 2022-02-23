import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarHaberesDescuentosComponent } from './ingresar-haberes-descuentos.component';

describe('IngresarHaberesDescuentosComponent', () => {
  let component: IngresarHaberesDescuentosComponent;
  let fixture: ComponentFixture<IngresarHaberesDescuentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarHaberesDescuentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarHaberesDescuentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
