import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarPersonalComponent } from './ingresar-personal.component';

describe('IngresarPersonalComponent', () => {
  let component: IngresarPersonalComponent;
  let fixture: ComponentFixture<IngresarPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
