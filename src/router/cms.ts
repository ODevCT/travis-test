import * as Router from 'koa-router';
import controller = require('../controller');

const router = new Router({ prefix: '/cms' });

export { router as default };