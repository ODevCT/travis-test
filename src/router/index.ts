import * as Router from 'koa-router';
import { default as publicRouter } from './public';
import { default as protectedRouter } from './protected';
import { default as cmsRouter } from './cms';

const router = new Router( {prefix: '/' + (process.env.SERVICE_PATH || 'default')} );

router.use(publicRouter.routes());

router.use(protectedRouter.routes());

if (process.env.IS_CMS == 'true') {
    router.use(cmsRouter.routes());
}

export { router };
