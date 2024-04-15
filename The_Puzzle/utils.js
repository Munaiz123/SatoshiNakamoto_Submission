const cardDeck = [
    '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', 'TH', 'JH', 'QH', 'KH', 'AH', 
    '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', 'TC', 'JC', 'QC', 'KC', 'AC',
    '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', 'TD', 'JD', 'QD', 'KD', 'AD', 
    '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', 'TS', 'JS', 'QS', 'KS', 'AS'
]

module.exports =   {
    cardDeck
}


/*
Royal flush  - A, K, Q, J, 10, all the same suit
Straight flush - Five cards in a sequence, all in the same suit
Four of a kind - four of the 5 cards of the same number/ rank
Full house - 3 of a kind with a pair
Flush - Any five cards of the same suit, but not in a sequence
Straight  - Five cards in a sequence, but not of the same suit
Three of a kind - Three cards of the same number/rank.
Two pair - Two different pairs
Pair - Two cards of the same rank.
*/