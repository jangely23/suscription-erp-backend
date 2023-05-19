/* Connection client migrations */

import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    url: 'mysql://dev-migrations:LaVieEstBelle@172.17.0.2:3306/erpdb',
    synchronize: false,
    logging: false,
    entities: ['/src/**/*.entity.ts'],
    migrations: ['/src/database/migrations/*.ts'],
    migrationsTableName: "migrations_database",
})

/* AppDataSource.initialize()
.then(() => {
    console.log("Data Source has been initialized!")
})
.catch((err) => {
    console.error("Error during Data Source initialization", err)
}) */