import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListsComponent } from './wish-lists.component';

describe('WishListsComponent', () => {
  let component: WishListsComponent;
  let fixture: ComponentFixture<WishListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
