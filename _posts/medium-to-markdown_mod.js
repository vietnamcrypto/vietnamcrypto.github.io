const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://medium0.com/j29creative/tokens-and-nfts-may-point-us-to-the-future-of-the-digital-world-4a5b014da1ee")
.then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});