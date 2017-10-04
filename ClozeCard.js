// TODO:
// 1. This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.: module.exports = ClozeCard;

// 2. The constructor should accept two arguments: text and cloze.

// 3. The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.

// 4. The constructed object should have a partial property that contains only the partial text.

// 5. The constructed object should have a fullText property that contains only the full text.

// 6. The constructor should throw or log an error when the cloze deletion does not appear in the input text.

// 7. Use prototypes to attach these methods, wherever possible.

var flashCard = require('./BasicCard');

function ClozeCard(text, cloze){
  this.text = text;
  this.cloze = cloze; //contains only the cloze-deleted portion of the text.
  this.partial= text.split(cloze)[1]; //contains only the partial text.
  this.fullText = text;   //contains only the full text.
}

ClozeCard.prototype.checkMatch = function(){
  this.text.includes(this.cloze) ?
  console.log('we have the text') : function(err){
    if(err) throw err;
    return;
  }
};

var clozeCard = new ClozeCard('George Washington was the first president of the United States.','George Washington');

clozeCard.checkMatch("This doesn't work", "oops");

module.export = ClozeCard;
