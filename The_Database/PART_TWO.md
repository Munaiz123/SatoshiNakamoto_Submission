# The Database - PART TWO

## Performance

### Data Consistency (Normalized vs Denormalized Schema)
The first potential problem that comes to mind is the data consistency and integrity. The best way to combat this potenatial issue is to design a normalized database schema where there are different tables with little to no redundant data. And data is connected from table to table via foreign keys.  

With that being said we can achieve good performance when querying a database by implementing a denormalized database schema that houses redundant data all in one(or few) table(s).

### Indexing
Another potential problem is the database performance for the Hashes Table that has 20B rows. 

Speaking of good performance, we can perform faster search operations by implementing indexes on the block and hash columns of the Hases Table as both of those columns can have many distinct values. This technique can be useful, for example, on the Hashes table that has 20B rows of data. With a table of this size, searching for any non-indexed columns can have an effect of performance. 

With that being said, I wouldn't index the Patterns Table because indexing can slow down INSERT, DELETE & UDPATE operations. The Patterns Table is already quite small compared to the Hashes Table and indexing a small table won't help much in terms of performance for the Patterns Table. 

### Partitioning
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
Once we have designed our database schema and impleneted the different performance strategies wihtin our database, the  we need to address the scalablity and architecure of our databases as it relates to our entire application.

Lets talk about horizontal scaling, Seperation of Concerns design principle as well as how our database fits into modern microservices architecture.

### Horizontal Scaling 
Assuming that our servers and database managment systems are upto par(vertically scaled) we need to think about deploying multiple servers or nodes. This becomes increasingly more important as our application and user base grows.

In a cloud environment, horizontal scaling means adding a database instance to the database cluster and having a database cluster in multiple availablity zones. 

### Seperation of Concerns
Separation of Concerns is a design principle that advocates for software systems to be divided into distinct sections, where each section addresses a single concern or responsibility.

In the context of database scalability, we can apply this principle by having an multiple database instances(or replicas) within a database cluster. One instance/replica of the database would handle only WRITE operations while another would only handle READ operations. The number of which type of instances can be adjusted based on the ratio of READ and WRITE operations taking place. 

### Micoservices Architecture
We can extend the Seperation of Concerns princiiple by adopting a microservices architecture for our application which then would trickle down into the database layer. This allows each microservice to have its own database, which then would allow teams to scale and manage their databases autonomously.

Lastly, within our microservices architecture we can implment caches to reduce the load on the databases by caching frequently accessed data or query results. 