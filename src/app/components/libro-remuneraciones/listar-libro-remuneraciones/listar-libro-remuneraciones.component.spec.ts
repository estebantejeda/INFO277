import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarLibroRemuneracionesComponent } from './listar-libro-remuneraciones.component';

describe('ListarLibroRemuneracionesComponent', () => {
  let component: ListarLibroRemuneracionesComponent;
  let fixture: ComponentFixture<ListarLibroRemuneracionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarLibroRemuneracionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarLibroRemuneracionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
