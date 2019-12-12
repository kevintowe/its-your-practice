import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosePickerComponent } from './pose-picker.component';

describe('PosePickerComponent', () => {
  let component: PosePickerComponent;
  let fixture: ComponentFixture<PosePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
