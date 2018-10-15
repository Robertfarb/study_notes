## CSRF Attack

## What is a CSRF Attack?
  * Cross Site Request Forgery is a common attack that is regularly exploited. 
  * Two parts to a CSRF Attack:
    1) Trick the victim into clicking a link or loading up a page
    2) Send a crafted request in the victims browser, that will send a legitimate looking request to the web application
    * The request will be sent with the values that the attacker wants, including any Cookies that the victim has associated with that website. This way, the web application knows that this victim can perform certain actions on the website and any request sent with these HTTP credentials or Cookies, will be considered as legitimate, even though the victim would be sending the request on the attacker’s command.