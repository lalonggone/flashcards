 chai = require('chai');
const expect = chai.expect;

const { createDeck, countCards } = require('../src/deck');
const { createCard } = require('../src/card');

//declare variables outside of the before hook to access...
let card1, card2, card3, deck, deckAmount;

//don't use const inside of the before hook... would var or let be better than nothing?
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
    deckAmount = countCards(deck);
  });

  describe('createDeck function', function() {
    it('should be a function', function() {
        expect(createDeck).to.be.a('function')
    })

    it('should create a deck with cards', function() {
        expect(deck[0]).to.equal(card1)
        expect(deck[1]).to.equal(card2)
        expect(deck[2]).to.equal(card3)
    })
  })

  describe('countCards function', function() {
    it('should be a function', function() {
        expect(countCards).to.be.a('function')
    })

    it('should count the number of cards in the deck', function() {
        expect(deck.length).to.equal(3)
    })
  })