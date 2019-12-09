import { async, TestBed } from '@angular/core/testing';
import { PosesModule } from './poses.module';

describe('PosesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PosesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PosesModule).toBeDefined();
  });
});
