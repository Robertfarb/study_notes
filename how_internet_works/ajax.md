## AJAX

* AJAX is a developer's dream because you can: 
  * update a web page without reloading the page
  * Request data from a server - after the page has loaded
  * Receive data from a server - after the page has loaded
  * Send data to a server - in the background

### What is AJAX?
  * AJAX = Asynchronous JavaScriopt and XML
  * AJAX uses a combination of a browser built in XMLHTTP Request Object (to request data from a web server)
  * JavaScript and HTML DOM (to display or use the data)
  * AJAX doesn't necessarily mean that XML is used to transport the data, it is equally common to transport data as plain text or JSON text.


## How AJAX Works
  * An event occurs in a web page (page is loaded, button is clicked)
  * An XMLHTTP Request object is created by JavaScript
  * The XMLHTTP Request object sends a request to the server
  * The Server processes the request
  * The Server sends a response back to the web page
  * The response is ready by JavaScript
  * Proper action like page update is performed by JavaScript;
  