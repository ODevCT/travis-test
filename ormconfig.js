module.exports = {
    type: 'mysql',
    port: 3306,
    username: 'root',
    password: 'MzHbM0nnfuukc6Gw',
    database: 'mytvsuper_sfm',
    synchronize: false,
    logging: false,
    entities: [
        'dist/entity/**/*.js'
    ],
    subscribers: [
        'dist/subscriber/**/*.js'
    ],
    migrations: [
        'dist/migration/**/*.js'
    ],
    cli: {
        'entitiesDir': 'src/entity',
        'migrationsDir': 'src/migration',
        'subscribersDir': 'src/subscriber'
    },
    extra: {
        socketPath: '/cloudsql/tvb-mytvs-sfm-qa:asia-east2:tvb-mytvs-sfm-db-qa'
    }
 }