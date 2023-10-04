import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPizzasComponent } from './list-pizzas.component';

describe('ListPizzasComponent', () => {
  let component: ListPizzasComponent;
  let fixture: ComponentFixture<ListPizzasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPizzasComponent]
    });
    fixture = TestBed.createComponent(ListPizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
