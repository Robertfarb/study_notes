# Serverless Technology
* Serverless is the native architecture of the cloud that enables us to shift more operational responsibilities to AWS.
* Serverless allows us to buidl and run applications and services without thinking about servers
* Eliminates infrastructure management tasks such as server or cluster provisioning, patching, operating system maintainence, and capacity provisioning.
* Four main benefits:
  1) No server management
  2) Flexible Scaling
  3) Pay for value
  4) Automated high availability

## AWS Lambda
* Provides functions as a service
* Provide AWS with functions that are scheduled across servers by AWS, and you only pay for time the functions are running, and the space they take.
* NodeJS - Server will not be running all the time
  * We will provide a NodeJS function that will be triggered by (image arrival in S3 bucket, HTTP request, scheduled jobs)
* `Functions as a service` is extremeley useful paradigm that helps solve problems easily
* Compute service that lets you run code without provisioning or managing servers.
* AWS Lambda executes the code only when needed and scales automatically from a few requests per day to thousands per second.
* Only pay for the compute time consumed.
* There is no charge when the code is not running. 
* You can use AWS Lambda to run your code in response to events, such as changes to data in an Amazon S3 bucket or an Amazon DynamoDB table; to run your code in response to HTTP requests using Amazon API Gateway; or invoke your code using API calls made using AWS SDKs. 
* With these capabilities, you can use Lambda to easily build data processing triggers for AWS services like Amazon S3 and Amazon DynamoDB, process streaming data stored in Kinesis, or create your own back end that operates at AWS scale, performance, and security.
* Function lives in handler.js
  ```js
  module.exports.hello = (evemt, context, callback) => {
    const response = {
      statusCode: 200, 
      body: JSON.stringify({
        message: 'Go serverless v1! Your function executed successfuly!',
        input: event
      }),
    };

    callback(null, response);
  }
  ```
* Serverless.yml holds all of the function configuration
  * service: lambda-test
  * provider:
    * name: aws
    * runtime: nodejs4.3
  * events:
    - http:
      path: users/create
      method: get
    - s3: ${env:BUCKET}