## Distributed Systems
  * DNS is the phonebook where ip addresses / domain names live.
  * The domain name is pointed to an ip address where the website actually lives
  * When we type in www.anydomain.com we first hit the DNS to see which Ip address to link the domani name to.
  * A server is any program that can accept requests from the web (HTTP Requests)
  * Postgres server is a server ecause it is called to set up and receive requests from our Rails Application (or the same machine)
  * When we're set up using one remote computer through AWS, it's definitely not a scalable for millions of users
    * Horizontally scaling (add many machines to split the work of many incoming loads)
    * Vertical scaling (improve the machine that takes the HTTP requests and making it faster to be able to handle higher loads)