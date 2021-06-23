const mediumToMarkdown = require('medium-to-markdown');
 
// Enter url here
mediumToMarkdown.convertFromUrl('https://medium.com/genesis-block-lab/tr%E1%BB%9F-th%C3%A0nh-blockchain-developer-p-1-kh%C3%A1i-ni%E1%BB%87m-c%C6%A1-b%E1%BA%A3n-fa835601233b')
.then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});