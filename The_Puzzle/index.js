const {cardDeck} = require('./utils')
const evaluatePokerHand = require('./PokerHands')


const thePuzzle = (hand) => { 
    let remainingDeck = determineRemainingDeck(hand)
    let currentPokerHandObj = evaluatePokerHand(hand)

    console.log('Current Poker Hand Obj =>>', currentPokerHandObj)
    
}

const determineRemainingDeck = hand => cardDeck.filter(card => !hand.includes(card))

const hand = ['TH', 'QH', 'JH',  'KH', 'AH' ];
thePuzzle(hand)


