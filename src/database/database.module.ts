import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

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
                    host,
                    port,
                    username: user,
                    password,
                    database: name,
                    entities: [join(__dirname,'/src/**/entities/*.entity{.ts,.js}')],
                    synchronize: false,
                    autoLoadEntities: true,
                }
            }
        })
    ],
    exports: [TypeOrmModule],
})
export class DatabaseModule {}
