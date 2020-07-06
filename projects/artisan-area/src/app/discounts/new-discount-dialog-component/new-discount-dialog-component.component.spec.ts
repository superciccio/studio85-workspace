import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDiscountDialogComponentComponent } from './new-discount-dialog-component.component';

describe('NewDiscountDialogComponentComponent', () => {
  let component: NewDiscountDialogComponentComponent;
  let fixture: ComponentFixture<NewDiscountDialogComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDiscountDialogComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDiscountDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
