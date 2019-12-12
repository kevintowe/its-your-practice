import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SequenceStepDialogComponent } from './sequence-step-dialog.component';

describe('SequenceStepDialogComponent', () => {
  let component: SequenceStepDialogComponent;
  let fixture: ComponentFixture<SequenceStepDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SequenceStepDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequenceStepDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
