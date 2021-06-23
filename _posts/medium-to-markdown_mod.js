const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://medium.com/@dkelnar/our-decentralised-future-a-blockchain-primer-fa610002b999")mediumToMarkdown.convertFromUrl('https://medium.com/genesis-block-lab/c%C3%A1ch-th%E1%BB%A9c-ho%E1%BA%A1t-%C4%91%E1%BB%99ng-c%E1%BB%A7a-blockchain-53f168e61047')
.then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});