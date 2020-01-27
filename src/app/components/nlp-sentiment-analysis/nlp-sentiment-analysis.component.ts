import { Component, OnInit } from '@angular/core';

import { GlobalService } from "../../services/global.service";
import { NLPSentimentAnalysisMain } from "./nlp-sentiment-analysis-main";

@Component({
  selector: 'app-nlp-sentiment-analysis',
  templateUrl: './nlp-sentiment-analysis.component.html',
  styleUrls: ['./nlp-sentiment-analysis.component.css']
})
export class NlpSentimentAnalysisComponent implements OnInit {

  nlp: NLPSentimentAnalysisMain;

  constructor(private service: GlobalService) {
    this.service.changePageTitle('NLP Sentiment Analysis');
  }

  ngOnInit() {
    this.nlp = new NLPSentimentAnalysisMain();
    this.play_again();
  }

  play_again(){
    let text = "I'm not really sure but it looks like we've got 3 things what you're searching for.";
    console.log({text});

    text = this.nlp.lexicon(text);
    console.log({text});

    text = this.nlp.toLowerCase(text);
    console.log({text});

    text = this.nlp.alphaOnly(text);
    console.log({text});

    text = this.nlp.tokenisation(text);
    console.log({text});



  }

}
