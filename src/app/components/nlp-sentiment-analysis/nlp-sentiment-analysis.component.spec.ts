import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NlpSentimentAnalysisComponent } from './nlp-sentiment-analysis.component';

describe('NlpSentimentAnalysisComponent', () => {
  let component: NlpSentimentAnalysisComponent;
  let fixture: ComponentFixture<NlpSentimentAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NlpSentimentAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlpSentimentAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
