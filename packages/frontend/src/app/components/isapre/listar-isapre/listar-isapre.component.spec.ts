import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarIsapreComponent } from './listar-isapre.component';

describe('ListarIsapreComponent', () => {
  let component: ListarIsapreComponent;
  let fixture: ComponentFixture<ListarIsapreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarIsapreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarIsapreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
