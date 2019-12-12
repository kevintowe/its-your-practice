import { async, TestBed } from '@angular/core/testing';
import { SequencesModule } from './sequences.module';

describe('SequencesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SequencesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SequencesModule).toBeDefined();
  });
});
