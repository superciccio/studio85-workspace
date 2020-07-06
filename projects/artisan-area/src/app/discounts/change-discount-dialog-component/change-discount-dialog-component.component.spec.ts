import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDiscountDialogComponentComponent } from './change-discount-dialog-component.component';

describe('ChangeDiscountDialogComponentComponent', () => {
  let component: ChangeDiscountDialogComponentComponent;
  let fixture: ComponentFixture<ChangeDiscountDialogComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeDiscountDialogComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDiscountDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
