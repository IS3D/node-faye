Node Faye
=============================

## Faye server with Node & Express

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

- Install [Yarn](https://yarnpkg.com/en/): `npm install -g yarn`
- Install dependencies: `yarn`
- Run the server locally: `npm start`


Development Environment Setup
---------

### Local Environment

#### Docker Compose (Recommended)

This application uses [Docker Compose](https://docs.docker.com/compose/), a tool for defining and running multi-container [Docker](https://www.docker.com/what-docker) applications which eliminates _"works on my machine"_ problems when collaborating on code with co-workers. Docker Compose is the recommended Development setup for all environments (MacOS, Linux, Windows), as it more closely resembles the Production environment (containerized Linux).

Install tools and dependencies:

* [Virtual Box v5.x or later](https://www.virtualbox.org/wiki/Downloads) - Docker requires version 5 or better
* [Docker Compose](https://docs.docker.com/compose/install/)

Configure Environment:

This application follows the [12-factor](https://12factor.net/) methodology. Instead of hardcoding configuration, as it relates to _API keys_, _services_, and _database credentials_, we rely on environment variables to handle this sensitive information.

Change the `example.env` file name to `.env`.

Build containers, install application and set up database:

```bash
$ git clone git@github.com:IS3D/node-faye.git
$ cd IS3D
$ docker-compose build
$ docker-compose up
```

Your app should now be running on [localhost:8080](http://localhost:8080/).

Deployment
---------

#### Heroku

- Push changes to Heroku: `git push heroku master`

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
