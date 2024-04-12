# The Database - PART TWO

## Performance

## Data Consistency (Normalized vs Denormalized Schema)
The first potential problem that comes to mind is the data consistency and integrity. The best way to combat this potenatial issue is to design a normalized database schema where there are different tables with little to no redundant data. And data is connected from table to table via foreign keys.  

With that being said we can achieve good performance when querying a database by implementing a denormalized database schema that houses redundant data all in one(or few) table(s).

### Indexing
Another potential problem is the database performance for the Hashes Table that has 20B rows. 

Speaking of good performance, we can perform faster search operations by implementing indexes on the block and hash columns of the Hases Table as both of those columns can have many distinct values. This technique can be useful, for example, on the Hashes table that has 20B rows of data. With a table of this size, searching for any non-indexed columns can have an effect of performance. 

With that being said, I wouldn't index the Patterns Table because indexing can slow down INSERT, DELETE & UDPATE operations. The Patterns Table is already quite small compared to the Hashes Table and indexing a small table won't help much in terms of performance for the Patterns Table. 

### Partition
However, we can improve INSERT, UPDATE and DELETE operations via Partitions. 

Partitioning allows us to break up our tables into logical column segments while still maintaing the larger table structure. This strategy allows us to prune out data from a query we know we don't need. 

For example we can parition the Hashes Table based on the block column by a block_number range, e.g 00000 - 33333, 33334-7777, etc. This will improve WRITING performance by block because we wont' have to sift through all 20B. 

### Query Optimizaiton
Another way we can improve performance is via query optimizations. Here are some query optimization techniques we can use when writing our queries:

1. Start with filtered data sets
2. Isolate data into temp tables / CTEs
3. Only select the columns we need
4. Leverage partitioning to prune out data we don't need via ```WHERE``` clauses



## Scalability

### Seperation of Concerns
