/* Connection client migrations */

import { join } from "path";
import { DataSource } from "typeorm";


export const AppDataSource = new DataSource({
    type: "mysql",
    host: '172.17.0.2',
    port: 3306,
    username: 'dev-migrations',
    password: 'LaVieEstBelle',
    database: 'erpdb',
    synchronize: false,
    logging: false,
    entities: [join(__dirname,'../**/entities/*.entity{.ts,.js}')],
    migrations: ['src/database/migrations/*{.ts,.js}'],
    migrationsTableName: "migrations_database",
})


AppDataSource.initialize()
.then(() => {
    console.log("Data Source has been initialized!")
})
.catch((err) => {
    console.error("Error during Data Source initialization", err)
})