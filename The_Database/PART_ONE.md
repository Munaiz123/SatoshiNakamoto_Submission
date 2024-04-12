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
Running this query locally returned two rows as expected. (*Test tables/data are shown below.*)

## Vertical Pattern

Coming up with the SQL query for the Vertical pattern proved to be harder than the Horizontal pattern as GPT need a little more explicit instructiions. Also running this query kept giving me the error that I wasn't able to figure out. 

```SQL
WITH RankedHashes AS (
    SELECT *,
           ROW_NUMBER() OVER (PARTITION BY block_number ORDER BY id) AS rn
    FROM Hashes
)
SELECT r.block_number, r.hash
FROM RankedHashes r
JOIN Patterns p ON p.direction = 'v'

WHERE EXISTS (
    SELECT 1
    FROM (
        SELECT SUBSTRING(hash FROM idx FOR LENGTH(p.pattern)) AS substr
        FROM generate_series(1, LENGTH(r.hash) - LENGTH(p.pattern) + 1) AS idx
    ) AS sub
    WHERE sub.substr = p.pattern
    AND r.rn + idx - 1 = position(p.pattern IN r.hash)
)
```

I've decided not complete the vertical pattern problem because it'll be better time allocation for me to work on a problem that better represents my skills. 


## Local Testing
I tested the two queries by creating a the same tables as in the problem locally on my machine.

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
