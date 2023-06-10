import { Module } from '@nestjs/common';
import { ChargeAccountController } from './controllers/charge_account.controller';
import { ChargeAccountTypeController } from './controllers/charge_account_type.controller';
import { ChargeAccountDetailsController } from './controllers/charge_account_details.controller';
import { ChargeAccountDetailsService } from './service/charge_account_details.service';
import { ChargeAccountTypesService } from './service/charge_account_types.service';
import { ChargeAccountsService } from './service/charge_accounts.service';
import { ChargeAccountsTemplateService } from './service/charge_accounts_template.service';
import { ChargeAccountsTemplateController } from './controllers/charge_account_template.controller';
import { ChargeAccountTemplateDetailsController } from './controllers/charge_account_template_detail.controller';
import { ChargeAccountTemplateDetailsService } from './service/charge_account_template_detail.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Charge_account } from './entities/charge_account.entity';
import { Charge_account_type } from './entities/charge_account_type.entity';
import { Charge_account_detail } from './entities/charge_account_detail.entity';
import { Charge_account_template } from './entities/charge_account_template.entity';
import { Charge_account_template_detail } from './entities/charge_account_template_detail.entity';
import { Customer } from 'src/customers/entities/customer.entity';
import { Product } from 'src/products/entities/product.entity';
import { CustomerModule } from 'src/customers/customers.module';
import { ProductsModule } from 'src/products/products.module';
import { ProductsController } from 'src/products/controller/products.controller';
import { ProductsService } from 'src/products/services/products.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Charge_account,
      Charge_account_type,
      Charge_account_detail,
      Charge_account_template,
      Charge_account_template_detail,
      Customer,
      Product
    ]),
    CustomerModule,
    ProductsModule,
  ],
  controllers: [
    ChargeAccountController,
    ChargeAccountTypeController,
    ChargeAccountDetailsController,
    ChargeAccountsTemplateController,
    ChargeAccountTemplateDetailsController,
    ProductsController,
  ],
  providers: [
    ChargeAccountDetailsService,
    ChargeAccountTypesService,
    ChargeAccountsService,
    ChargeAccountsTemplateService,
    ChargeAccountTemplateDetailsService,
    ProductsService,
  ],
})
export class ChargeAccountModule {}
