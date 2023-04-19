# NxCommerce

This is a monorepo containing 2 e-commerce apps

1. Angular v15 Frontend
2. NestJs v9 Backend

## Set up
1. Fork the project
2. Clone the project
3. Run `npm install` to install node packages and dependencies

## Front End

Run `npm run start:fe` or `nx serve front-end` for a dev server. Navigate to http://localhost:4200/. The Angular app will automatically reload if you change any of the source files.

## Back End

Run `npm run start:be` or  `nx serve back-end` for a dev server. Navigate to http://localhost:3000/. 
The NestJs app will be launced


## Testing

1. Angular Tests

Run `npm run test:fe` or `nx run front-end:test`

2. NestJs Tests

Run `npm run test:be` or `nx run back-end:test`

## Graphs

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

