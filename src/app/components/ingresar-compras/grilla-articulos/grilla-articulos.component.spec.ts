import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillaArticulosComponent } from './grilla-articulos.component';

describe('GrillaArticulosComponent', () => {
  let component: GrillaArticulosComponent;
  let fixture: ComponentFixture<GrillaArticulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrillaArticulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillaArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
