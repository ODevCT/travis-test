import * as Router from 'koa-router';
import controller = require('../controller');

const router = new Router({ prefix: '/public' });

// GENERAL ROUTES
router.get('/test', controller.general.helloWorld);

export { router as default };