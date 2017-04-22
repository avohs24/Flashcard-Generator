var inquirer = require('inquirer');

function BasicCard(front, back) {
    this.front = front;
    this.back = back;
}

function ClozeCard(text, cloze) {
    this.text = text;
    this.cloze = cloze;
    this.clozeFull = function() {
        return (this.text + this.cloze);
    };
    this.clozePartial = function() {
        return (this.text);
    };
    this.clozeDeleted = function() {
        return (this.cloze);
    }
};

inquirer.prompt([
  {
    type: 'checkbox',
    name: 'typeOfCard',
    message: 'What type of card do you want to make?',
    choices: ['Basic Card', 'Cloze Card']
  },
  {
    type: 'input',
    name: 'BasicFront',
    message: 'What do you want on the front of the card?',
  },
  {
    type: 'input',
    name: 'BasicBack',
    message: 'What do you want on the back of the card?'
  },
  {
    type: 'input',
    name: 'Cloze',
    message: 'What do you want to be the cloze part of your card?'
  },
  {
    type: 'input',
    name: 'Partial',
    message: "What do you want to be the rest of your card?"
  }
]).then(function(user){
  if(user.typeOfCard === 'Basic Card'){
      new BasicCard(user.BasicFront, user.BasicBack);
      console.log(BasicCard);
  }else {
    new ClozeCard(user.Partial, user.Cloze);
    console.log(ClozeCard);
  }
})












// var userInput = process.argv;

// if (userInput === ClozeCard) {
//     new ClozeCard(userInput);
// } else {
//     console.log('I didnt work');
// };
//
// new ClozeCard()
