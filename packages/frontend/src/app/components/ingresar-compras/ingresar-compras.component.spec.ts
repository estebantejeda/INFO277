import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarComprasComponent } from './ingresar-compras.component';

describe('IngresarComprasComponent', () => {
  let component: IngresarComprasComponent;
  let fixture: ComponentFixture<IngresarComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarComprasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
