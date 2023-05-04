import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import configuration from '../configuration';

@Global()
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            inject: [configuration.KEY],
            useFactory: (configService: ConfigType<typeof configuration>) => {
                const {name, port, host, user, password} = configService.database;
                return {
                    type: 'mysql',
                    host: host,
                    port: port,
                    username: user,
                    password: password,
                    database: name,
                    entities: [],
                    synchronize: false,
                }
            }
        })
    ],
    exports: [TypeOrmModule],
})
export class DatabaseModule {}
