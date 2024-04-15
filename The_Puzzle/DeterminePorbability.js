// Function to determine the probability of getting higher poker hands after mulligan
module.exports = function determineHigherHandProbability(cardsToMulligan, potentialPokerHandsToPursue, currentDeck) {
    // Initialize total probability
    let totalProbability = 0;

    // Loop through potential poker hands
    for (const hand of potentialPokerHandsToPursue) {
        // Calculate the probability of getting the current poker hand
        const probability = calculateProbability(hand, cardsToMulligan, currentDeck);

        // Add the probability to the total
        totalProbability += probability;
    }

    return totalProbability;
}

// Function to calculate the probability of getting a specific poker hand
function calculateProbability(hand, cardsToMulligan, currentDeck) {
    // Clone the current deck
    const modifiedDeck = [...currentDeck];

    // Add mulliganed cards to the deck
    modifiedDeck.push(...cardsToMulligan);

    // Total number of possible hands after mulligan
    const totalPossibleHands = modifiedDeck.length + 1; // Current deck + cards to mulligan

    // Count the number of hands that result in the specified poker hand
    let favorableHands = 0;

    // Check each possible hand in the modified deck
    for (let i = 0; i < modifiedDeck.length; i++) {
        for (let j = i + 1; j < modifiedDeck.length; j++) {
            const possibleHand = [modifiedDeck[i], modifiedDeck[j], ...cardsToMulligan];
            if (evaluatePokerHand(possibleHand) === hand) {
                favorableHands++;
            }
        }
    }

    // Calculate the probability
    const probability = favorableHands / totalPossibleHands;

    return probability;
}
