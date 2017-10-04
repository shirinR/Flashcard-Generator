var BasicCard = require('./BasicCard');
var ClozeCard = require('./ClozeCard');
var cardLibrary = require('./flashCardLibrary');

var fs = require("fs");

function readCard(cardType){
  fs.readFile('flashCardLibrary.json','utf-8', function(err, data){
    if(err) console.log(err);

    jasonData = JSON.parse(data);

    if(cardType=== jasonData[0].type){

      var basicCard = new BasicCard(jasonData[0].front,jasonData[0].back);
      console.log('front: ' + basicCard.front + ' | back: ' + basicCard.back);

    }else if(cardType=== jasonData[1].type){

      var clozeCard = new ClozeCard(jasonData[1].text, jasonData[1].cloze);
      clozeCard.checkMatch();

    }else{
      console.log('Sorry!');
    }

  });
}

readCard("BasicCard");
readCard("ClozeCard");
