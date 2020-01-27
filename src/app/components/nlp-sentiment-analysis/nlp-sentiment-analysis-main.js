// const aposToLexForm = require('apos-to-lex-form');

const natural = require('natural');


export class NLPSentimentAnalysisMain {


  constructor() {
    // this.tokenizer = new natural.WordTokenizer();


    // var tokenizer = new natural.WordTokenizer();
    // console.log(tokenizer.tokenize("your dog has fleas."));
  }




  lexicon(text){
    // return aposToLexForm(text);
    return text;
  }

  toLowerCase(text){
    return text.toLowerCase();
  }

  alphaOnly(text){
    return text.replace(/[^a-zA-Z0-9\s]+/g, '');
  }

  tokenisation(text){
    // return this.tokenizer.tokenize(text);</b>
  }
}
