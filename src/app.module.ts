import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { enviroments } from './enviroments';
import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { InventoryModule } from './inventorys/inventorys.module';
import { SuscriptionsModule } from './suscriptions/suscriptions.module';
import configuration from './configuration';



@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [configuration],
      isGlobal: true,
      validationSchema: Joi.object({
        API_KEY: Joi.string().required(),
        DATABASE_HOST: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
        DATABASE_USER: Joi.string().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PASSWORD: Joi.string().required(),
      }),
    }),
    DatabaseModule,
    ProductsModule,
    UsersModule,
    OrdersModule,
    InventoryModule,
    SuscriptionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
