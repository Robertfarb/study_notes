* [System Design Introduction](#system-design-introduction)
* [Systems Design High Level Topics](#systems-design-high-level-topics)
* [Design Twitter](#design-twitter)

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
    * Hit the send button --> POST request to API ---> REDIS database (lands in 3 REDIS machines in memory.)



