import * as Koa from 'koa';
import * as jwt from 'koa-jwt';
import * as bodyParser from 'koa-bodyparser';
import * as helmet from 'koa-helmet';
import * as cors from '@koa/cors';
import { createConnection } from 'typeorm';
import 'reflect-metadata';
import * as log4js from 'log4js';
import { logger } from './logging';
import { config } from './config';
import { router } from './router';

// Create connection with database
createConnection().then(async connection => {

    const app = new Koa();

    // Provides important security headers to make your app more secure
    app.use(helmet());

    // Enable cors with default options
    app.use(cors());

    // Logger middleware -> use log4js as logger (logging.ts with config)
    app.use(logger(log4js));

    // Enable bodyParser with default options
    app.use(bodyParser());

    // Validate JWT unless the URL starts with '/public'
    app.use(jwt({ secret: config.jwtSecret }).unless({ path: [/^\/\w+\/(public|cms)/] }));

    app.use(router.routes());

    app.listen(config.port);

    console.log(`Server running on port ${config.port}`);

}).catch(error => console.log('TypeORM connection error: ', error));