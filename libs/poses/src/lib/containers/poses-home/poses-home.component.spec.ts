import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosesHomeComponent } from './poses-home.component';

describe('PosesComponent', () => {
  let component: PosesHomeComponent;
  let fixture: ComponentFixture<PosesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PosesHomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
