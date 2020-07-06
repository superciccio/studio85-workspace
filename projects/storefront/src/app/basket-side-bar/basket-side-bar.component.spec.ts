import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketSideBarComponent } from './basket-side-bar.component';

describe('BasketSideBarComponent', () => {
  let component: BasketSideBarComponent;
  let fixture: ComponentFixture<BasketSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
