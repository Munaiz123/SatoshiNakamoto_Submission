// Function to evaluate a poker hand
let potentialPokerHands = []

module.exports = function evaluatePokerHand(cards) {
    // Sort cards by rank
    cards.sort((a, b) => {
        const ranks = '23456789TJQKA';
        return ranks.indexOf(a[0]) - ranks.indexOf(b[0]);
    });    

    // Check for Royal Flush
    if (isRoyalFlush(cards)) return {pokerHand:"Royal Flush", potentialPokerHands}

    // Check for Straight Flush
    if (isStraightFlush(cards)) return {pokerHand:"Straight Flush", potentialPokerHands}

    // Check for Four of a Kind
    if (isFourOfAKind(cards)) return {pokerHand:"Four of a Kind", potentialPokerHands}

    // Check for Full House
    if (isFullHouse(cards)) return {pokerHand:"Full House", potentialPokerHands}

    // Check for Flush
    if (isFlush(cards)) return {pokerHand:"Flush", potentialPokerHands}

    // Check for Straight
    if (isStraight(cards)) return {pokerHand:"Straight", potentialPokerHands};

    // Check for Three of a Kind
    if (isThreeOfAKind(cards)) return {pokerHand:"Three of a Kind", potentialPokerHands};

    // Check for Two Pair
    if (isTwoPair(cards)) return {pokerHand:"Two Pair", potentialPokerHands};

    // Check for Pair
    if (isPair(cards)) return {pokerHand:"Pair", potentialPokerHands};

    // If no other hand, it's a High Card
    return {pokerHand:"High Card", potentialPokerHands};
}

// Helper function to check if cards form a Royal Flush
function isRoyalFlush(cards) {
    if(isStraightFlush(cards) && cards[0][0] === 'T') return true
    else{
        potentialPokerHands.push('Royal Flush')
        return false
    }
}

// Helper function to check if cards form a Straight Flush
function isStraightFlush(cards) {
    if(isFlush(cards) && isStraight(cards)) return true
    else{
        potentialPokerHands.push('Straight Flush')
        return false
    }
}

// Helper function to check if cards form a Four of a Kind
function isFourOfAKind(cards) {
    if((cards[0][0] === cards[1][0] && cards[1][0] === cards[2][0] && cards[2][0] === cards[3][0]) ||
        (cards[1][0] === cards[2][0] && cards[2][0] === cards[3][0] && cards[3][0] === cards[4][0]))
        {
            return true
        }
        else{
            potentialPokerHands.push("Four of a Kind")
            return false
        }
}

// Helper function to check if cards form a Full House
function isFullHouse(cards) {
    if((cards[0][0] === cards[1][0] && cards[1][0] === cards[2][0] && cards[3][0] === cards[4][0]) ||
        (cards[0][0] === cards[1][0] && cards[2][0] === cards[3][0] && cards[3][0] === cards[4][0]))
        {
            return true
        }
        else{
            potentialPokerHands.push("Full House")
            return false
        }
}

// Helper function to check if cards form a Flush
function isFlush(cards) {
    if(cards.every(card => card[1] === cards[0][1])) return true
    else potentialPokerHands.push("Flush")
}

// Helper function to check if cards form a Straight
function isStraight(cards) {
    const ranks = '23456789TJQKA';
    for (let i = 0; i < cards.length - 1; i++) {
        if (ranks.indexOf(cards[i + 1][0]) !== ranks.indexOf(cards[i][0]) + 1) {
            potentialPokerHands.push("Straight")
            return false;
        }
    }
    return true;
}

// Helper function to check if cards form a Three of a Kind
function isThreeOfAKind(cards) {
    if((cards[0][0] === cards[1][0] && cards[1][0] === cards[2][0])  ||
        (cards[1][0] === cards[2][0] && cards[2][0] === cards[3][0]) ||
        (cards[2][0] === cards[3][0] && cards[3][0] === cards[4][0]))
        {
            return true
        }
        else{
            potentialPokerHands.push("Three of a Kind")   
            return false
        }
}

// Helper function to check if cards form a Two Pair
function isTwoPair(cards) {
    const pairs = [];
    for (let i = 0; i < cards.length - 1; i++) {
        if (cards[i][0] === cards[i + 1][0]) {
            pairs.push(cards[i][0]);
        }
    }
    if(pairs.length === 2) return true
    else{
        potentialPokerHands.push("Two Pair")
        return false
    }
}

// Helper function to check if cards form a Pair
function isPair(cards) {
    for (let i = 0; i < cards.length - 1; i++) {
        if (cards[i][0] === cards[i + 1][0]) {
            return true;
        }
    }
    potentialPokerHands.push('Pair')
    return false;
}
