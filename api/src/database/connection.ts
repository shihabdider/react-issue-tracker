import {DataSource} from 'typeorm';

import * as entities from 'entities';

const createDatabaseConnection = (): Promise<DataSource> =>
  new DataSource({
    type: 'postgres',
    url: 'postgresql://postgres:aALZuCbiODHALwv40aAH@containers-us-west-101.railway.app:7196/railway',
    //host: process.env.DB_HOST,
    //port: Number(process.env.DB_PORT),
    //username: process.env.DB_USERNAME,
    //password: process.env.DB_PASSWORD,
    //database: process.env.DB_DATABASE,
    entities: Object.values(entities),
  }).initialize();

export default createDatabaseConnection;
