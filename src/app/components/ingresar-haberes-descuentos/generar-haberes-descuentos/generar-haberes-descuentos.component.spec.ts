import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarHaberesDescuentosComponent } from './generar-haberes-descuentos.component';

describe('GenerarHaberesDescuentosComponent', () => {
  let component: GenerarHaberesDescuentosComponent;
  let fixture: ComponentFixture<GenerarHaberesDescuentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerarHaberesDescuentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarHaberesDescuentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
