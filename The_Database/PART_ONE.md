# The Database - PART ONE

## Horizontal Pattern
I enlisted Chat GPT (3.5) to help me get the SQL query to solve Part One of The Database problem throught the following prompt:

```txt
I have a postgresql database with 2 tables: Patterns & Hashes.

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

GPT answered with the following SQL Query:
```SQL
SELECT p.pattern, h.block_number, h.hash
FROM Patterns p
JOIN Hashes h ON strpos(h.hash, p.pattern) > 0 AND p.direction = 'h';
```


## Vertical Pattern

Coming up with the SQL query for the Vertical pattern proved to be harder than the Horizontal pattern. GPT wasn't as helpful for this pattern. 

I tried to come up with the query myself by taking excerpts from GPT and various answers on StackOverflow:




## Testing the SQL Queries
I tested the two queries by creating a the same tables as in the problem locally on my machine.

Running the Horizontal pattern sql query on the tables below should return only two rows.

```SQL
-- Create Patterns table
CREATE TABLE Patterns (
    Id SERIAL PRIMARY KEY,
    pattern VARCHAR(255),
    direction CHAR(1)
);

-- Insert mock data into Patterns table
INSERT INTO Patterns (pattern, direction) VALUES
('420', 'h'),
('3d',  'v'),
('xyz', 'h'),
('ae', 'v'),
('munaiz', 'h');

-- Create Hashes table
CREATE TABLE Hashes (
    Id SERIAL PRIMARY KEY,
    block_number VARCHAR(255),
    hash VARCHAR(255)
);

-- Insert mock data into Hashes table
INSERT INTO Hashes (block_number, hash) VALUES
('12345', 'abcd1234ef5678'),
('67890', 'efgh5678ij9012'),
('12345', 'yahf91d8hk4953'),
('10111', 'munaizahmediscool'),
('987654', 'qrst7420uv1234');
```
