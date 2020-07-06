import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEditProductComponent } from './new-edit-product.component';

describe('NewEditProdcutComponent', () => {
  let component: NewEditProductComponent;
  let fixture: ComponentFixture<NewEditProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEditProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
