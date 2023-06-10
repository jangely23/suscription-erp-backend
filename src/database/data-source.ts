import { DataSource } from "typeorm";

/* Connection client migrations */

export const AppDataSource = new DataSource({
    type: "mysql",
    host: '172.17.0.2',
    port: 3306,
    username: 'dev-migrations',
    password: 'LaVieEstBelle',
    database: 'erp_manager',
    logging: false,
    entities: ['/dist/**/entities/*.entity{.ts,.js}'],
    migrations: ['/src/database/migrations/*.ts'],
    migrationsTableName: "migrations",
    
})

AppDataSource.initialize()
.then(() => {
    console.log("Data Source has been initialized!")
})
.catch((err) => {
    console.error("Error during Data Source initialization", err)
})