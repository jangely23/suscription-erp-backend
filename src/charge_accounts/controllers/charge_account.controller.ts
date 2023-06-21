import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ChargeAccountsService } from '../service/charge_accounts.service';
import { CreateChargeAccountDto, FilterChargeAccountDto, UpdateChargeAccountDto } from '../dtos/charge_account.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ApikeyGuard } from 'src/auth/guards/apikey.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RoleGuard } from 'src/auth/guards/role.guard';

@ApiBearerAuth()
@ApiTags('Charge accounts')
@UseGuards(ApikeyGuard, JwtAuthGuard, RoleGuard)
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
        @Param('companyId', ParseIntPipe) company_id: number,
        @Query() params: FilterChargeAccountDto
    ){
        return this.chargeAccount.findAllByCompany(company_id, params);
    }

    @Get(':companyId/:customerId')
    @HttpCode(HttpStatus.ACCEPTED)
    getAllByCustomer(
        @Param('companyId', ParseIntPipe) company_id: number,
        @Param('customerId', ParseIntPipe) customer_id: number,
        @Query() params: FilterChargeAccountDto
    ){
        return this.chargeAccount.findAllByCustomer(company_id, customer_id, params);
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

