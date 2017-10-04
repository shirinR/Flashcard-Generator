var flashCard = require('./BasicCard');

function ClozeCard(text, cloze){
  this.text = text;
  this.cloze = cloze; //contains only the cloze-deleted portion of the text.
  this.partial= text.split(cloze)[1]; //contains only the partial text.
  // this.fullText = text;   //contains only the full text.
}

ClozeCard.prototype.checkMatch = function(){
  this.text.includes(this.cloze) ?
  console.log('we have the text') : function(err){
    if(err) throw err;
    return;
  }
};

var clozeCard = new ClozeCard('George Washington was the first president of the United States.','George Washington');

clozeCard.checkMatch();

module.export = ClozeCard;
