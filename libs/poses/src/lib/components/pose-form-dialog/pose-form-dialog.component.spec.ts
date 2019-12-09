import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoseFormDialogComponent } from './pose-form-dialog.component';

describe('PoseFormDialogComponent', () => {
  let component: PoseFormDialogComponent;
  let fixture: ComponentFixture<PoseFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PoseFormDialogComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoseFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
