import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { ChargeAccountsTemplateService } from '../service/charge_accounts_template.service';
import { CreateChargeAccountTemplateDto, FilterChargeAccountTemplateDto, UpdateChargeAccountTemplateDto } from '../dtos/charge_account_template.dto';

@Controller('charge-accounts-template')
export class ChargeAccountsTemplateController {
    constructor(private chargeAccountTemplate: ChargeAccountsTemplateService ){}
   
    @Get('charge-account-template/:chargeAccountTemplateId')
    @HttpCode(HttpStatus.ACCEPTED)
    getOne(
        @Param('chargeAccountTemplateId', ParseIntPipe) charge_account_template_id: number,
    ){
        return this.chargeAccountTemplate.findOne(charge_account_template_id);
    }

    @Get(':companyId')
    @HttpCode(HttpStatus.ACCEPTED)
    getAllByCompany(
        @Param('companyId', ParseIntPipe) company_id: number,
        @Query() params: FilterChargeAccountTemplateDto
    ){
        return this.chargeAccountTemplate.findAllByCompany(company_id, params);
    }

    @Get(':companyId/:customerId')
    @HttpCode(HttpStatus.ACCEPTED)
    getAllByCustomer(
        @Param('companyId', ParseIntPipe) company_id: number,
        @Param('customerId', ParseIntPipe) customer_id: number,
        @Query() params: FilterChargeAccountTemplateDto
    ){
        return this.chargeAccountTemplate.findAllByCustomer(company_id, customer_id, params);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() payload: CreateChargeAccountTemplateDto){
        return this.chargeAccountTemplate.create(payload);
    }

    @Put(':chargeAccountTemplateId')
    @HttpCode(HttpStatus.OK)
    update(
        @Param('chargeAccountTemplateId', ParseIntPipe) charge_account_template_id: number,
        @Body() payload: UpdateChargeAccountTemplateDto
    ){
        return this.chargeAccountTemplate.update(charge_account_template_id, payload);
    }

    @Delete(':chargeAccountTemplateId')
    @HttpCode(HttpStatus.OK)
    delete(@Param('chargeAccountTemplateId', ParseIntPipe) charge_account_template_id: number){
        return this.chargeAccountTemplate.delete(charge_account_template_id);
    }  
}
