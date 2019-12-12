import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SequenceStepComponent } from './sequence-step.component';

describe('SequenceStepComponent', () => {
  let component: SequenceStepComponent;
  let fixture: ComponentFixture<SequenceStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SequenceStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequenceStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
