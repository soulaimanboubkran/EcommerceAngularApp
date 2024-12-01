import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTodosComponent } from './item-todos.component';

describe('ItemTodosComponent', () => {
  let component: ItemTodosComponent;
  let fixture: ComponentFixture<ItemTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemTodosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
