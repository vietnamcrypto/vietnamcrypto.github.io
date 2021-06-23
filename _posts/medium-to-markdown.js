const mediumToMarkdown = require('medium-to-markdown');
 
// Enter url here
mediumToMarkdown.convertFromUrl('https://medium.com/leclevietnam/blockchain-v%C3%A0-web-development-11a746a20119')
.then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});