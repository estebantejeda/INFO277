import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAfpComponent } from './listar-afp.component';

describe('ListarAfpComponent', () => {
  let component: ListarAfpComponent;
  let fixture: ComponentFixture<ListarAfpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAfpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAfpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
