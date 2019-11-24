## About this
This project is a fully working bootstrap for developping an express-mongoose api with typescript.

## Installation
 - clone the repo
 - run `docker-compose up` without mocha `docker-compose up --scale mocha=0`
 - browse `http://localhost:9000/api/ping`, `http://localhost:9000/api/ping/fail`, `http://localhost:9000/api/views/visit`
 - profit

## Useful knowledge

### Rebuilding the images
After adding new npm or typings package, you will have to rebuild your images as follows:

 - `docker-compose kill`
 - `docker-compose rm`
 - `docker-compose build`
 - `docker-compose up`

### Add new npm package:
 - `docker-compose run api yarn add <wathever>`, then rebuild the images
