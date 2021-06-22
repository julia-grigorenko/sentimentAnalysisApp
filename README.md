# Text analysis app for sentiment 

> Application analyzes text data from user and uses natural language processing (NLP) to determine the user’s sentiment.

## Tools:

- Node.js
- Express.js
- NLP(natural language processing, a branch of artificial intelligence)
- Natural(a Node.js package that supports most of the NLP algorithms)
- Apos-to-lex-form (a Node.js package that maintains uniform structure in text dataand converts contractions to standard lexicon)
- Spelling-corrector package to correct misspelled words
- Stopword to remove words have no effect on a text’s sentiment

>  The sentiment analysis algorithm from the Natural library is based on a     vocabulary that assigns polarity to words. For example, the word “good” has a polarity of 3, while “bad” has a polarity of -3. The algorithm does its sentiment calculation by summing the polarity of each word in a piece of text and normalizing with the length of a sentence. The text’s sentiment is considered negative if our algorithm returns a negative value, positive if it returns a positive value, and neutral if it returns 0.


### Usage as Api with GET endpoint
1. npm install
2. Create .env file and configure PORT `PORT=3000` 
3. Start server `node routes/getAPI.js`.
4. Address requests with params to `${host:port?q=your-text-here}` 
5. And get JSON back as `{"analysis":0}`

### Usage with frontend interface
1. npm install
2. Create .env file and configure PORT `PORT=3000`
3. Start server `node ./bin/www` or `npm start`
4. Open in browser `http://localhost:3000`
5. Enter some sample text in textarea and you will see the emoji reflects the sentiment below.

Based on and modified: https://blog.logrocket.com/sentiment-analysis-node-js/,
https://github.com/ffd8/sentilyzer