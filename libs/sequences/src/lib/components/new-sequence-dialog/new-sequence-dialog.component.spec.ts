import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSequenceDialogComponent } from './new-sequence-dialog.component';

describe('NewSequenceDialogComponent', () => {
  let component: NewSequenceDialogComponent;
  let fixture: ComponentFixture<NewSequenceDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSequenceDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSequenceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
