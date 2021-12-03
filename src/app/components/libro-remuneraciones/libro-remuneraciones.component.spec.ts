import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroRemuneracionesComponent } from './libro-remuneraciones.component';

describe('LibroRemuneracionesComponent', () => {
  let component: LibroRemuneracionesComponent;
  let fixture: ComponentFixture<LibroRemuneracionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibroRemuneracionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroRemuneracionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
