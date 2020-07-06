import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersMobileBottomSheetComponent } from './filters-mobile-bottom-sheet.component';

describe('FiltersMobileBottomSheetComponent', () => {
  let component: FiltersMobileBottomSheetComponent;
  let fixture: ComponentFixture<FiltersMobileBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltersMobileBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersMobileBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
