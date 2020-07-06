import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadMessagedComponent } from './read-messaged.component';

describe('ReadMessagedComponent', () => {
  let component: ReadMessagedComponent;
  let fixture: ComponentFixture<ReadMessagedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadMessagedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadMessagedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
