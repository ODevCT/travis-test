import * as Koa from 'koa';
import * as log4js from 'log4js';

// defined interface datatype
interface ILogData {
    requestMethod: string;
    requestUrl: string;
    requestHeaders: string;
    requestBody: JSON;
    responseBody: JSON;
    responseStatus: number;
    responseMessage: string;
    responseHeader: string;
    app: any;
}

// logger
export function logger(Instan: typeof log4js) {
    return async(ctx: Koa.ParameterizedContext, next: () => Promise<any>) => {
        // logger categoryName to access
        const log4 = Instan.getLogger("access");
        // logger layout to json format
        Instan.addLayout('json', config => function (logEvent) {
            return JSON.stringify(logEvent) + config.separator;
        });
        // logger configure
        Instan.configure({
            appenders: {
                default: {
                    // defined type (file, stdout, console, dateFile, stderr, tcp, recording, multiprocess)
                    type: 'stdout',
                    layout: {
                        type: 'json',
                        separator: ','
                    }
                }
            },
            categories: {
                default: {
                    appenders: ['default'],
                    level: 'info'
                }
            },
        });
        await next();

        // logger info data
        const logData: Partial<ILogData> = {
            requestMethod: ctx.request.method,
            requestUrl: ctx.request.url,
            requestHeaders: ctx.request.headers,
            requestBody: ctx.request.body,
            responseBody: ctx.body,
            responseStatus: ctx.response.status,
            responseMessage: ctx.response.message,
            responseHeader: ctx.response.header,
            app: ctx.app
        };
        // current time
        const start = new Date().getMilliseconds();
        // output info data
        log4.info(logData , start);
    };
}
