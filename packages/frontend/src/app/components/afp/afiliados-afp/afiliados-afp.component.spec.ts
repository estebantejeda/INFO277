import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfiliadosAfpComponent } from './afiliados-afp.component';

describe('AfiliadosAfpComponent', () => {
  let component: AfiliadosAfpComponent;
  let fixture: ComponentFixture<AfiliadosAfpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfiliadosAfpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfiliadosAfpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
