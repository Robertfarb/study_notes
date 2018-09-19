### `POST`:  
  * A RESTful `post` request is commonly used to **create** new resources
  * on successful creation, return HTTP status 201, with a location header and link to the newly created resource

### `GET`:    
  * a RESTful get request is used to get a collection of items / single item
  * The HTTP GET method is used to **read** (retrieve) a representation of a resource.
  * `GET` returns a representation in XML or JSON (whichever is specified in the request header)  and a response code of 200 (OK) on success.
  

### `PUT`:  
  * a put request is used to update / replace an entry
  * `PUT` is most often used for **update**
  * `POST` is an alternative that we can use instead of PUT  to create new resources and provide the client-defined id in the body representation

### `PATCH`: 
  * `PATCH` is used for modify capabilities.
  * Patch request only needs to contain the changes to the resource, not the complete resources
  * Patch resembles PUT but the body contains a set of instructions describing how the resource currently living on the server should be modified to produce a new version

### `DELETE`:
  * `DELETE` is easy to understand and is used to **delete** a resource identified by a URI
  * **URI**: Uniform resource identifier