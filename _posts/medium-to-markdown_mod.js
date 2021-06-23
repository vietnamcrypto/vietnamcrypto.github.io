const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://medium.com/personal-finance/bitcoin-and-ethereum-are-dead-and-their-honest-investors-know-it-a36ee97df89d")
.then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});