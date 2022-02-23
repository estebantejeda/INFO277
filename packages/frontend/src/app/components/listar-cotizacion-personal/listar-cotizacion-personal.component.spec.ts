import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCotizacionPersonalComponent } from './listar-cotizacion-personal.component';

describe('ListarCotizacionPersonalComponent', () => {
  let component: ListarCotizacionPersonalComponent;
  let fixture: ComponentFixture<ListarCotizacionPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCotizacionPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCotizacionPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
