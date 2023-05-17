import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ChargeAccountsService } from '../service/charge_accounts.service';
import { CreateChargeAccountDto, UpdateChargeAccountDto } from '../dtos/charge_account.dto';

@Controller('charge-accounts')
export class ChargeAccountController {
    constructor(private chargeAccount: ChargeAccountsService ){}
   
    @Get('charge-account/:chargeAccountId')
    @HttpCode(HttpStatus.ACCEPTED)
    getOne(
        @Param('chargeAccountId', ParseIntPipe) charge_account_id: number,
    ){
        return this.chargeAccount.findOne(charge_account_id);
    }

    @Get(':companyId')
    @HttpCode(HttpStatus.ACCEPTED)
    getAllByCompany(
        @Param('companyId', ParseIntPipe) company_id: number
    ){
        return this.chargeAccount.findAllByCompany(company_id);
    }

    @Get(':companyId/:customerId')
    @HttpCode(HttpStatus.ACCEPTED)
    getAllByCustomer(
        @Param('companyId', ParseIntPipe) company_id: number,
        @Param('customerId', ParseIntPipe) customer_id: number,
    ){
        return this.chargeAccount.findAllByCustomer(company_id, customer_id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() payload: CreateChargeAccountDto){
        return this.chargeAccount.create(payload);
    }

    @Put(':chargeAccountId')
    @HttpCode(HttpStatus.OK)
    update(
        @Param('chargeAccountId', ParseIntPipe) charge_account_id: number,
        @Body() payload: UpdateChargeAccountDto
    ){
        return this.chargeAccount.update(charge_account_id, payload);
    }

    @Delete(':chargeAccountId')
    @HttpCode(HttpStatus.OK)
    delete(@Param('chargeAccountId', ParseIntPipe) charge_account_id: number){
        return this.chargeAccount.delete(charge_account_id);
    }   
}

