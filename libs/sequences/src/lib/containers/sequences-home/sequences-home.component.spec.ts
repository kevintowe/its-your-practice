import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SequencesHomeComponent } from './sequences-home.component';

describe('SequencesHomeComponent', () => {
  let component: SequencesHomeComponent;
  let fixture: ComponentFixture<SequencesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SequencesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequencesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
