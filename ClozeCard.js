function ClozeCard(text, cloze){
  this.text = text;
  this.cloze = cloze;

  // NOTE: works too >> this.partial= text.split(cloze)[1];
  this.partial = this.text.replace(this.cloze, '...');
}

ClozeCard.prototype.checkMatch = function(){

  this.text.includes(this.cloze) ?
  console.log('Cloze Included in Text') : function(err){
    if(err) throw err;
    return;
  }

};

module.exports = ClozeCard;
