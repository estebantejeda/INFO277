import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsapreComponent } from './isapre.component';

describe('IsapreComponent', () => {
  let component: IsapreComponent;
  let fixture: ComponentFixture<IsapreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsapreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsapreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
