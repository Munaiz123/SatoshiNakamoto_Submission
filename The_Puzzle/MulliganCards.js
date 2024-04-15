// Function to determine which cards to mulligan based on the current hand
module.exports = function determineMulligan(cards) {
    // Initialize an array to store the cards to mulligan
    const mulliganedCards = [];

    // Check the current hand and decide which cards to mulligan
    switch (evaluatePokerHand(pokerHand,cards)) {
        case "Royal Flush":
            // no need to mulligan because we already have the highest hand possible
            break;
        case "Straight Flush":
            // mulligan any cards that aren't T,J,Q,K,A ('royal cards')
            break;
        case "Four of a Kind":
            // mulligan the odd card out
            break;
        case "Full House":
            // mulligan the cards that make up the pair. 
            //but also depends rank the other cards are and what hand we're trying to pursue
            break;
        case "Flush":
            break;
        case "Straight":
            //mulligan the cards with the least common suits
            //also potentially the cards that aren't "royal cards"
            break;
        case "Three of a Kind":
            // Mulligan two cards of  to try for a better hand
            break;
        case "Two Pair":
            // Mulligan one card to try for a better hand
            break;
        case "Pair":
            // Mulligan three cards to try for a better hand
            break;
        case "High Card":
            // Mulligan all cards to try for a better hand
            break;
    }

    return mulliganedCards;
}

// Example usage
const hand = ['2H', '3H', '4H', '5H', '6H'];
console.log("Cards to mulligan:", determineMulligan(hand));
