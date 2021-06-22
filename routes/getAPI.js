const express = require('express');
const aposToLexForm = require('apos-to-lex-form');
const natural = require('natural');
const SpellCorrector = require('spelling-corrector');
const SW = require('stopword');
require('dotenv').config();
const app = express();


const spellCorrector = new SpellCorrector();
spellCorrector.loadDictionary();

// handle call
app.get('/', function(req, res){

	if(req.query.q){
		let q = req.query.q;
        // removing contractions and casing
		const casedReview = aposToLexForm(q.toLowerCase());

		// removing symbols
		const alphaOnlyReview = casedReview.replace(/[^a-zA-Z\s]+/g, '');

		// tokenize 
		const { WordTokenizer } = natural;
		const tokenizer = new WordTokenizer();
		const tokenizedReview = tokenizer.tokenize(alphaOnlyReview);

		 // spell correction
		 tokenizedReview.forEach((word, index) => {
		 	tokenizedReview[index] = spellCorrector.correct(word);
		 })

		// remove stopwords
		const filteredReview = SW.removeStopwords(tokenizedReview);

		const { SentimentAnalyzer, PorterStemmer } = natural;
		const analyzer = new SentimentAnalyzer('English', PorterStemmer, 'afinn');

		const analysis = analyzer.getSentiment(filteredReview);

		res.send({'analysis':analysis});
	}else{
		res.send('usage -> <a href="?q=your-text-here">'+req.get('host')+'?q=your-text-here</a><br>source code -> <a href="https://github.com/ffd8/sentilyzer">github</a>');
	}
});

app.listen(process.env.PORT, ()=> {
    console.log(`App is listening at http://localhost:${process.env.PORT}`);
});
