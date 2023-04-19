# NxCommerce

This is a monorepo containing 2 e-commerce apps

1. Angular v15 Frontend
2. NestJs v9 Backend

## Set up
1. Fork the project
2. Clone the project
3. Run `npm install` to install node packages and dependencies

## Front End

Run `npm run start:fe` for a dev server. Navigate to http://localhost:4200/. The Angular app will automatically reload if you change any of the source files.

## Back End

Run `npm run start:be` for a dev server. Navigate to http://localhost:3000/. 
The NestJs app will be launced


## Testing

1. Angular Tests

Run `npm run test:fe`

2. NestJs Tests

Run `npm run test:be`

## Building

1. Angular

Run `npm run build-prod:fe`

2. NestJs

Run `npm run build-prod:be`

3. Build all apps

Run `npm run build-prod:all`

## Graphs

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

