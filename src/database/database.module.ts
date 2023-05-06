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
                    host,
                    port,
                    username: user,
                    password,
                    database: name,
                    synchronize: false,
                    autoLoadEntities:true,
                }
            }
        })
    ],
    exports: [TypeOrmModule],
})
export class DatabaseModule {}
