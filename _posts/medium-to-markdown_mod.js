const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://medium.com/trivial-co/lending-and-borrowing-on-the-blockchain-should-banks-be-scared-e0a01c857c43")
.then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});