# The Puzzle 

## Assumptions / Constraints

The input for the function would an array of string elements(cards) with the rank of the card is the first character of the string and the suit is the second character of the string. 

SUITS
"H" = Hearts | "S" = Spades | "C" = Clubs | "D" = Diamonds

CARD RANK/NUMBER
"A" = Ace    |  "K" = King  | "Q" = Queen | "J" = Jack | "T" = 10 | "9" = 9 | "8" = 8 | etc...


Example Input: ['2H', '3H', '4H', '5H', '6H'] 

## Overview

1. Determine what the remaining deck is i.e. what are the remaining cards in the deck after we've been 'dealt' our hand?
    - This will help with calculating probability once we decide what cards we want to add back to the deck. 

2. We then need to determine what poker hand we have.

3. Our current poker hand will determine what the higher poker hands we can 'pursue' via mulligan.
    - Need to have a hierachy of poker hands -> inserted into an array??

4. For each higher-ranked poker hand, we need to identify which cards from our hand we need mulligan.

5. Calculate the probability of drawing the right cards for each potential higher-ranked poker hand(once we put back the x number of cards we decided to mulligan).