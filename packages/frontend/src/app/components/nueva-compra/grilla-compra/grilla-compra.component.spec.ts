import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillaCompraComponent } from './grilla-compra.component';

describe('GrillaCompraComponent', () => {
  let component: GrillaCompraComponent;
  let fixture: ComponentFixture<GrillaCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrillaCompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillaCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
