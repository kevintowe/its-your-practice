import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSequenceComponent } from './view-sequence.component';

describe('ViewSequenceComponent', () => {
  let component: ViewSequenceComponent;
  let fixture: ComponentFixture<ViewSequenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSequenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
