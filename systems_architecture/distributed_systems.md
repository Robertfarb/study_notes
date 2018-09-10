## Distributed Systems
  * DNS is the phonebook where ip addresses / domain names live.
  * The domain name is pointed to an ip address where the website actually lives
  * When we type in www.anydomain.com we first hit the DNS to see which Ip address to link the domani name to.
  * A server is any program that can accept requests from the web (HTTP Requests)
  * Postgres server is a server ecause it is called to set up and receive requests from our Rails Application (or the same machine)
  * When we're set up using one remote computer through AWS, it's definitely not a scalable for millions of users
    * Horizontally scaling (add many machines to split the work of many incoming loads)
    * Vertical scaling (improve the machine that takes the HTTP requests and making it faster to be able to handle higher loads)
    * Often very efficient business wise to push over from optimization to better hardware to free up engineers times to add more new features instead
    of using all their time on optimization
    * Horizontal scaling can be more complicated than scaling up / vertical scaling
### What makes applications slow
  * Database is normally what makes applications slow
  * Ram vs. Hard Disk
    * RAM - random access memory that can temporarily hold programs variables, and data for life of the run
      * RAM is an electrical circuit and when power is lost to the electrical circuit, everything that was stored there is lost.
      * RAM is not persistent (as soon as power is lost... RAM is not persisted)
      * Non-persistent means fast writing, fast access (but loss of persistence trade off)
      * One of the simplest ways to improve application performance is to buy more RAM
    * Hard Disk - data recoring takes a lot longer because we need to get to the appropriate point to record the data, (cassette player metaphor)
      * Persistence means slow access and writing
      * Writes to the database (facebook post) need to be persisted to the database incase FB goes down for a day, it can't lose everyone's information
      * Active set of data is the frequently used set of Data. 
## Scaling Out: Load Balancers
  * Horizontal Scaling
  * Scaling out the work of the rails application is quite simple, and the best option for horizontal scaling
    * An example of this would be renting 3 - 300 machines from AWS instead of 1 and downloading the same rails code to all of those machines
    * This would work by linking all of those rails machines to the same Database
    * When using the architecture described above, the user only talks with one computer which we call the load balancer
      * The load balancer is configured to talk to all of the machines running rails
      * When a request comes in from a user, the load balancer just has to copy in the incoming HTTP requests and send them to a randomly selected rails machine.
  * Load balancers can handle failure and will be able to only send requests to the working machines
  * When using load balancing architecture no one machine is a single point of failure

    
    
