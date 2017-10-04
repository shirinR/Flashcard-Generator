// TODO:
// 1. This file should define a Node module that exports a constructor for creating basic flashcards, e.g.: module.exports = BasicCard;

// 2. The constructor should accept two arguments: front and back.

// 3. The constructed object should have a front property that contains the text on the front of the card.

// 4. The constructed object should have a back property that contains the text on the back of the card.


function BasicCard(front,back){
  this.front = front; //contains text on the fron of the card
  this.back = back;  //contains text on the back of the card
}

module.export = BasicCard;
