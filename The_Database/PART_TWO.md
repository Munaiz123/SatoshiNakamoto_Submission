# The Database - PART TWO

There are three way 

## Data Consistency (Normalized vs Denormalized Schema)
The first potential problem that comes to mind is the data consistency and integrity. The best way to combat this potenatial issue is to design a normalized schema where there are many different tables with little to no redundant data. 

With that being said we can achieve really good performance with a denormalized database schema that houses redundant data all in one table or very few tables. 

## Performance
Another potential problem is the database performance for the Hashes Table that has 20B rows. With a table of this size, searching for any non-indexed column can have an effect of performance. 

### Idexing
We can perform faster search operations by implementing indexes on the block and hash columns of the Hases Table as both of those columns can have many distinct values.

For example, I wouldn't index the ```direction``` column in the Patterns Table because indexing can slow down INSERT, DELETE & UDPATE operations. Not to mention the Patterns Table is already quite small compared to the Hashes Table and indexing a small table won't help much in terms of performance. 

### Partition
With that being said, we can improve INSERT and UPDATE operations via Partitions. The more rows we have in a table the slower our performance will be. 

But by breaking up our tables into logical column segments we can still maintain the larger table structure. This strategy allows us prune out data we know we don't need. 

For example we can parition the Hashes Table based on the block column by a block_number range, e.g 00000 - 33333, 33334-7777, etc. This will improve WRITING performance by block because we wont' have to sift through all 20B. 


### Query Optimizaiton
Another way we can improve performance is via query optimizations. Here are some query optimization techniques we can use when writing our queries:

1. Start with filtered data sets
2. Isolate data into temp tables / CTEs
3. Only select the columns we need
4. Leverage partitioning to prune out data we don't need via ```WHERE``` clauses



## Scalability

### Seperation of Concerns