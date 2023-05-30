# NxCommerce

This is a monorepo containing 2 e-commerce apps

1. Angular v15 Frontend
2. NestJs v9 Backend
3. TypeORM
4. MySQL server
5. Nx v15+
6. SwaggerUi v6+

## Set up
1. Fork the project
2. Clone the project
3. Run `npm install` to install node packages and dependencies
4. Create a .env file at the root of the project with the following settings

```
JWT_SECRET=
JWT_EXPIRES_IN=

AWS_S3_BUCKET=


DATABASE_TYPE=
DATABASE_HOST=
DATABASE_PORT=
DATABASE_USERNAME=
DATABASE_PASSWORD=
DATABASE_NAME=

```

## Front End

`npm run start:fe` for a dev server. Navigate to http://localhost:4200/. The Angular app will automatically reload if you change any of the source files.

## Back End

`npm run start:be` for a dev server. Navigate to http://localhost:3000/. 
The NestJs app will be launced


## Testing

1. Angular Tests

`npm run test:fe`

2. NestJs Tests

`npm run test:be`

## API Docs

Use SwaggerUi to visualize and interact with the API’s resources

Make sure the back-end service has been started if not start with `nx server back-end`

Navigate to `http://localhost:3000/docs` using the browser

## Building

1. Angular

`npm run build-prod:fe`

2. NestJs

`npm run build-prod:be`

3. Build all apps

`npm run build-prod:all`

## Graphs

`nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

`npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

