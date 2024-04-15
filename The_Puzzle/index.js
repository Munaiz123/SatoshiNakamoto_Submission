const {cardDeck} = require('./utils')
const evaluatePokerHand = require('./PokerHands')
const determineMulligan = require('./MulliganCards')
const determineHigherHandProbability = require('./DeterminePorbability')

const thePuzzle = (hand) => { 
    let remainingDeck = determineRemainingDeck(hand) 

    let {currentPokerHand, potentialPokerHandsToPursue} = evaluatePokerHand(hand)

    let cardsToMulligan = determineMulligan(currentPokerHand,hand)

    let toalHigherHandProbability = determineHigherHandProbability(cardsToMulligan, remainingDeck, potentialPokerHandsToPursue)

    return {cardsToMulligan, toalHigherHandProbability}
}

const determineRemainingDeck = hand => cardDeck.filter(card => !hand.includes(card))

const hand = ['TH', 'QH', 'JH',  'KH', 'AH' ];
thePuzzle(hand)


