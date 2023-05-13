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

@Module({
  controllers: [ChargeAccountController, ChargeAccountTypeController, ChargeAccountDetailsController, ChargeAccountsTemplateController, ChargeAccountTemplateDetailsController],
  providers: [ChargeAccountDetailsService, ChargeAccountTypesService, ChargeAccountsService, ChargeAccountsTemplateService, ChargeAccountTemplateDetailsService]
})
export class ChargeAccountModule {}
