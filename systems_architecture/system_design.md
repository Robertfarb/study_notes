* [System Design Introduction](#system-design-introduction)
* [Systems Design High Level Topics](#systems-design-high-level-topics)
* [Design Twitter](#design-twitter)
* [Design Uber/Lyft](#design-uber-lyft)

## System Design Introduction
  * ABCD's: 
  * `A`sk good questions
  * Don't use `B`uzzwords
  * `C`lear and organized thinking
  * `D`rive discussions (80/20 rule)
  * `Features`:
    * `Define MVP with interviewer`
    * Facebook messenger:
      * 1 to 1 chat
      * group chat
    * `Define API's`
      * What are the APIS
      * Who's goin to call those APIs
    * `Availability`
    * `Latency Performance`
      * customer facing v. background job
      * Cache to improve latency
    * `Scalability`
    * `Durability`: Data can be stored in a database securely
    * `Class Diagram`
    * `Security & Privacy`
    * `Cost effective`
      * Discuss pros and cons of diff solutions as far as costs are concerned

## Systems Design High Level Topics
  * Vertical v. Horizontal Scaling
  * ACID v. BASE
    * Atomicy, Consisitency, Isolation, Durability
    * Basically, Available, Softstate, Evntual Consistency
  * Consistent Hashing
    * distributed hashing scheme that operates independently of the number of servers or objects in a distrubited hash table by assigning them a position on an abstract circle, or hash ring. This allows servers and objects to scale without affecting the overall system.
  * Optimistic v. Pessemistic Locking
  * Relational DB v. NoSQL DB.

## Design Twitter
  * MVPS:
    * Tweeting
    * Timeline (see followed tweets / see your own tweets)
    * Following
  * What to optimize for?
    * Many read requests to the database, but not nearly as many write requests
    * Similar to Facebook, we care about speed (consistency)
      * If a user tweets we care about the delivery time to other users
    * `Eventual Consistency`
  * Tweet
    * Hit the send button --> POST request to API --> Load Balancer ---> REDIS datastore 
      * The tweet will land in 3 REDIS machines in memory.
      * The REDIS machines we use must need to have a lot of RAM / storage for optimized
      * We will only update the timelines of users that are active recently to improve performance
      * When one tweet gets sent out, REDIS lists for every one of that user's followers gets updated

## Design Uber Lyft
  * "How would you design Uber or Lyft?
  * `Core Features`:
    * Finding / Matching customers to drivers
    * Mapping / Routing
  * `Trip Storage`
    * We must store all trips a customer has taken
    * We also must store all the rides a driver has provided
    * Uber leverages Cloud platforms like AWS, but they also use their own data centers.
    * Each trip is stored in a close data center to the location, and then 2 backup data centers as well.
    * If a data center is offline, then Uber will store a trip in a backup datacenter, then sync datacenters.
    * `What type of database should we use?`
      * High availability + Low Latency --> NOSQL.
      * So many requests and pickups happen at the same time, so we need lo latency requests.
      * Uber uses a mix of SQL, NOSQL databases: Cassandra, MYSQL (no-relational)
    * Uber uses Hadoop as a data warehouse, that will archive the trip storage. This is decoupled from the daily business of trip storage, and driver ratings. Hadoop is used for business analytics and larger storage needs.
  * `Caching Layer`
  

  




