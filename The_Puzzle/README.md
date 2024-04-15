# The Puzzle 

### Assumptions / Constraints

The input for the function would an array of string elements(cards) with the rank of the card is the first character of the string and the suit is the second character of the string. 

#### Suits:
"H" = Hearts | "S" = Spades | "C" = Clubs | "D" = Diamonds

#### Card Rank:
"A" = Ace    |  "K" = King  | "Q" = Queen | "J" = Jack | "T" = 10 | "9" = 9 | "8" = 8 | etc...

Example Input: ['2H', '3H', '4H', '5H', '6H'] 

### Overview 

1. Determine what the remaining deck is i.e. what are the remaining cards in the deck after we've been 'dealt' our hand? This will help with calculating probability once we decide what cards we want to add back to the deck. 

2. We then need to determine what the current poker hand we have is. 

3. Once we know our current poker hand, we can determine the poker hands we want to 'pursue' via mulligan. We'll create a list potential hands we want to pursue and calculate the probabalities for each potential hand and add the up together. In order to do this, we'll need to have a hierarchy of poker hands. We're determining this rank in ```PokerHands.js``` .

4. In```MulligcanCards.js```, we'll pass our current poker hand and determine what cards to mulligan. 

5. We'll take the remaining deck, the cards to mulligan from the previous step as well as the list of potential poker hands to pursue and calculate the probablity of drawing the right cards for each potential higher-ranked poker hand(once we put back the x number of cards we decided to mulligan).

