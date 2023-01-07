# HIRE STATE

## Application to track companies and positions, WIP

Includes both server (node.js) and client (React).

To run the server, run in the root directory:

``` npm run start```

Connection to mongo db uses environment variables, so define them in .env file as following:

``` 
    MONGO_USERNAME=<user>
    MONGO_PASSWORD=<pwd>
    MONGO_DB_NAME=<dbname>
```

To test server with Jest, run in the root directory:

```npm run test```

To run the client, change directory to client and run:

```npm run start```

