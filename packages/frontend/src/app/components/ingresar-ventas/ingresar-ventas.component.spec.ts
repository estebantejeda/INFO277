import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarVentasComponent } from './ingresar-ventas.component';

describe('IngresarVentasComponent', () => {
  let component: IngresarVentasComponent;
  let fixture: ComponentFixture<IngresarVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarVentasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
