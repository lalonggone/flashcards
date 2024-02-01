const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess } = require('../src/card');
const { createDeck, countCards } = require('../src/deck');
const {
  createRound,
  takeTurn,
  calculatePercentCorrect,
  endRound,
} = require('../src/round');

let deck, newRound, guess, guess2, guess3;

before(function () {
   card1 = createCard(
    1,
    "What is Robbie's favorite animal",
    ['sea otter', 'pug', 'capybara'],
    'sea otter'
  );
   card2 = createCard(
    14,
    'What organ is Khalid missing?',
    ['spleen', 'appendix', 'gallbladder'],
    'gallbladder'
  );
   card3 = createCard(
    12,
    "What is Travis's middle name?",
    ['Lex', 'William', 'Fitzgerald'],
    'Fitzgerald'
  );

  deck = createDeck([card1, card2, card3]);
  newRound = createRound(deck);
  guess = 'sea otter';
  guess2 = 'gallbladder';
  guess3 = 'John';
});

describe('createRound', function () {
  it('should be a function', function () {
    expect(createRound).to.be.a('function');
  });

  it('should have a deck property that holds onto the deck object', function () {
    expect(newRound).to.be.a('object');
  });

  it('should have a currentCard property that is the first card in the deck', function () {
    expect(newRound.currentCard).to.be.a('object');
  });

  it('should have a turns property with 0 as a default', function () {
    expect(newRound.turns).to.equal(0);
  });

  it('should have a incorrectGuesses property that starts as an empty array', function () {
    expect(newRound.incorrectGuesses).to.be.a('array');
  });
});

describe('takeTurn', function () {
  it('should increase the turns each round', function () {
    const round = createRound(deck);

    takeTurn(guess, round);

    expect(round.turns).to.equal(1);
  });

  it('should update the number of incorrect guesses', function () {
    const round = createRound(deck);

    takeTurn(guess, round);
    takeTurn(guess2, round);
    takeTurn(guess3, round);

    expect(calculatePercentCorrect(round)).to.equal(66.67);
  });

  it('should switch to the next card in the deck', function () {
    const round = createRound(deck);

    takeTurn(guess, round);

    expect(round.currentCard).to.equal(round.deck[round.turns]);
  });
});

describe('calculatePercentCorrect', function () {
  it('should correctly calculate a percentage', function () {
    const round = createRound(deck);
    takeTurn(guess, round);  
    takeTurn(guess2, round);
    takeTurn(guess3, round);

    expect(calculatePercentCorrect(round)).to.equal(66.67);
  });
});

describe('endRound', function () {
  it('should tell the player their percentage', function () {
    const round = createRound(deck);
    takeTurn(guess, round); 
    takeTurn(guess2, round);
    takeTurn(guess3, round);
    
    const expectedMessage = '** Round over! ** You answered 66.67% of the questions correctly!';
    expect(endRound(round)).to.equal(expectedMessage);
  });
});