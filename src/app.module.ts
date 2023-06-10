import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { enviroments } from './enviroments';
import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './products/products.module';
import { CustomerModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { InventoryModule } from './inventorys/inventorys.module';
import { ChargeAccountController } from './charge_accounts/controllers/charge_account.controller';
import { ChargeAccountModule } from './charge_accounts/charge_account.module';
import { UsersModule } from './users/users.module';
import configuration from './configuration';
import { ChargeAccountsService } from './charge_accounts/service/charge_accounts.service';
import { CampaignModule } from './campaign/campaign.module';



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
    CustomerModule,
    OrdersModule,
    InventoryModule,
    ChargeAccountModule,
    UsersModule,
    CampaignModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
