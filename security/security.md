## Harvard Web Development Security Lecture  
* [Telnet / FTP](#telnet-ftp)
* [SQL Injections](#sql-injections)
* [HTTP v. HTTPS](#http-v-https)

### Telnet FTP
  * `Telnet` - Protocol that allows us to control one computer from another
  * `FTP`: File Transfer Protocol
  * FTP is not encrytped
  * FTP is bad practice today, because there is an encrypted alternative: `SFTP`

### HTTP v. HTTPS
  * HTTP involves sending a unique identifier that holds information like sessions
  * HTTP is not secure - HTTP does not encrpyt data that is being seng over networks
  * HTTPS is secure - it encrypts data that is being sent over networks. 
  * A server sends a set cookie header to a browser, and a value is stored in that key, that the browesr stores. Now when that request comes again, the server is aware that the browser has received the encrypted unique identifier before. 

### SQL Injections


