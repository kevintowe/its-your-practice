import { async, TestBed } from '@angular/core/testing';
import { FeatureLandingModule } from './feature-landing.module';

describe('FeatureLandingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureLandingModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureLandingModule).toBeDefined();
  });
});
