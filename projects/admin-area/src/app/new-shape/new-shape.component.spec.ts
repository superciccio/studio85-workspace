import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewShapeComponent } from './new-shape.component';

describe('NewShapeComponent', () => {
  let component: NewShapeComponent;
  let fixture: ComponentFixture<NewShapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewShapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewShapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
