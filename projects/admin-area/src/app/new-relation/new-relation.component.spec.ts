import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRelationComponent } from './new-relation.component';

describe('NewRelationComponent', () => {
  let component: NewRelationComponent;
  let fixture: ComponentFixture<NewRelationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRelationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
