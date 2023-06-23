import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ChargeAccountsService } from '../service/charge_accounts.service';
import { CreateChargeAccountDto, FilterChargeAccountDto, UpdateChargeAccountDto } from '../dtos/charge_account.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ApikeyGuard } from 'src/auth/guards/apikey.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RoleGuard } from 'src/auth/guards/role.guard';
import { Roles } from 'src/auth/decorators/role.decorator';
import { Role } from 'src/auth/models/role.model';

@ApiBearerAuth()
@ApiTags('Charge accounts')
@UseGuards(ApikeyGuard, JwtAuthGuard, RoleGuard)
@Controller('charge-accounts')
export class ChargeAccountController {
    constructor(private chargeAccount: ChargeAccountsService ){}
   
    @Roles(Role.ADMIN, Role.OPERATOR)
    @Get('charge-account/:chargeAccountId')
    @HttpCode(HttpStatus.ACCEPTED)
    getOne(
        @Param('chargeAccountId', ParseIntPipe) charge_account_id: number,
    ){
        return this.chargeAccount.findOne(charge_account_id);
    }

    @Roles(Role.ADMIN, Role.OPERATOR)
    @Get(':companyId')
    @HttpCode(HttpStatus.ACCEPTED)
    getAllByCompany(
        @Param('companyId', ParseIntPipe) company_id: number,
        @Query() params: FilterChargeAccountDto
    ){
        return this.chargeAccount.findAllByCompany(company_id, params);
    }

    @Roles(Role.ADMIN, Role.OPERATOR)
    @Get(':companyId/:customerId')
    @HttpCode(HttpStatus.ACCEPTED)
    getAllByCustomer(
        @Param('companyId', ParseIntPipe) company_id: number,
        @Param('customerId', ParseIntPipe) customer_id: number,
        @Query() params: FilterChargeAccountDto
    ){
        return this.chargeAccount.findAllByCustomer(company_id, customer_id, params);
    }

    @Roles(Role.ADMIN, Role.OPERATOR)
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() payload: CreateChargeAccountDto){
        return this.chargeAccount.create(payload);
    }

    @Roles(Role.ADMIN, Role.OPERATOR)
    @Put(':chargeAccountId')
    @HttpCode(HttpStatus.OK)
    update(
        @Param('chargeAccountId', ParseIntPipe) charge_account_id: number,
        @Body() payload: UpdateChargeAccountDto
    ){
        return this.chargeAccount.update(charge_account_id, payload);
    }

    @Roles(Role.ADMIN, Role.OPERATOR)
    @Delete(':chargeAccountId')
    @HttpCode(HttpStatus.OK)
    delete(@Param('chargeAccountId', ParseIntPipe) charge_account_id: number){
        return this.chargeAccount.delete(charge_account_id);
    }   
}

