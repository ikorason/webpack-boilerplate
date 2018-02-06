# Simple Webpack Boilerplate

Simple webpack config and production enabled, learned through [webpack-book](https://github.com/survivejs/webpack-book).
Little tweak for react environment

## Getting Started

Clone the repo, and yarn install. After run yarn start:dev, webpack-dev-server will run on port 3000, you can config your own port by using env variable, simply create .env file and create:

```
_DEV_PORT=3005 // whatever you want
```

## Deploy with now.sh

yarn add serve, add script to package.json:

```
"now-start": "serve --single ./build"
```

then run now in your project directory, will be using your now account to serve react application

## Contributing

I am relatively new to webpack, still learning and appreciate feedback and contribution, send all kindz of pull request!
