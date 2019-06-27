import { BaseContext } from 'koa';
import * as log4js from 'log4js';

const logging = log4js.getLogger("general");

export default class GeneralController {

    public static async helloWorld (ctx: BaseContext) {
        ctx.body = 'Hello World!';
        logging.info("==successful=!==");
    }

    public static async getJwtPayload (ctx: BaseContext) {
        // example just to set a different status
        ctx.status = 201;
        // the body of the response will contain the information contained as payload in the JWT
        ctx.body = ctx.state.user;
    }

}