# About

Shameless copy from here:

https://www.honeybadger.io/blog/oauth-nodejs-javascript/  See this artice to add your own OAuth App in GitHub.

## Changes

The Github id and secret are now in the .env file, see the auth2-node-server/README.md



## Installing

### Server

```cd oauth2-node-server```

```npm install```

### Client

```cd oauth2-node-app```

```npm install```


## Running

### Running the local CORS proxy

Discussed here https://www.honeybadger.io/blog/oauth-nodejs-javascript/

```npm install -g local-cors-proxy```

```lcp --proxyUrl https://api.github.com/```


### Server

```cd oauth2-node-server```

```node -r dotenv/config index.js```

### Client

```cd oauth2-node-app```

```npm start```


## Running

### Server

```cd oauth2-node-server```

```node -r dotenv/config index.js```

### Client

```cd oauth2-node-app```

```npm start```
