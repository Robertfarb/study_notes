## REST
* REST stands for Representational State Transfer
* REST is a set of design principles for making network communication more scaleable and flexible.
* Roy T. Fielding coined the term REST

## The Fielding Constraints
1) `Client-Server`
  * A RESTful system has to operate in the client-server model, even if a component sometimes acts like a client and sometimes acts like a server
2) `Stateless`
  * The Client and the server do not need to keep track of eachother's state
  * Each client / server request is stand alone
3) `Uniform Interface`
  * This constraint ensures that there is a common language between client and servers that allows each part to be swapped out or modified without breaking the entire system.
  * Constraints:  
    * Identification of resources: Each resource must be uniquely identified by a stable identifier. A stable identifier means that it does not change across interactions and it doesn't change when the state of the resource changes.
    * To get a sesource stored on a server a client makes an HTTP GET request to the URI that identifies the resource.
4) `Identification of Resources`
5) `Layered System`
6) `Code on Demand`