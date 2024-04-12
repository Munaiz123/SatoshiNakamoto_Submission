# The Database Walkthrough

## PART ONE


In all honesty, I used Chat GPT (3.5) to help me get the SQL query to solve Part One of The Database problem. However, I didn't just copy and paste the problem verbatim in to Chat GPT. I actually read through the problem a few times before writing out my prompt in GPT

### Horizontal Pattern
This was the actual prompt that I used to get the horizontal pattern sql query:

```txt
I have a postgresql database with 2  tables: Patterns & Hashes.

The Patterns table has 3 columns:
1. Id
2. pattern - a string of characters 
3. direction - has either ‘v’ (vertical ) or ‘h’ (horizontal)

The Hashes table also has 3 columns:
1. Id
2. Block number
3. Hash 

I need a query (or series of queries), that will list which block number ( 'block' column from 'hashes' table) matches each pattern in the patterns table.

If a pattern is horizontal (denoted with an ‘h’)  from the patterns table, the pattern must appear as a substring of one of the hashes for that block.
```


### Vertical Pattern





## PART TWO
