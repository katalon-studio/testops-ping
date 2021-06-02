# testops-ping
TestOps healthcheck experiment

## Prerequisites:

* nodejs
* npm

## Start server on local environment

1. Create a ```.env``` file at root then copy this and paste into the file: ```URL=''```
2. Put the url that you want to ping to in ```.env``` file as the value for URL variable. For instance: ```URL='https://example.com/'```
3. Install the necessary packages: ```npm install```
4. Start the server: ```node .\app.js```
