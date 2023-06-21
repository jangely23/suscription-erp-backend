import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ChargeAccountTypesService } from '../service/charge_account_types.service';
import { CreateChargeAccountTypeDto, UpdateChargeAccountTypeDto } from '../dtos/charge_account_type.dto';
import { ApikeyGuard } from 'src/auth/guards/apikey.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RoleGuard } from 'src/auth/guards/role.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Charge account types')
@UseGuards(ApikeyGuard, JwtAuthGuard, RoleGuard)
@Controller('charge-account-type')
export class ChargeAccountTypeController {
     constructor(private chargeAccountType: ChargeAccountTypesService) {}

   @Get()
    @HttpCode(HttpStatus.ACCEPTED)
    getAllCustomersType(
        @Query('limit') limit = 100,
        @Query('offset') offset = 0,
    ){
        return this.chargeAccountType.findAll();
    }

    @Get(':chargeAccountTypeId')
    @HttpCode(HttpStatus.ACCEPTED)
    getOneCustomerType(@Param('chargeAccountTypeId', ParseIntPipe)customer_type_id: number ){
        return this.chargeAccountType.findOne(customer_type_id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() payload: CreateChargeAccountTypeDto){
        return this.chargeAccountType.create(payload);
    }

    @Put(':chargeAccountTypeId')
    @HttpCode(HttpStatus.OK)
    update(
        @Param('chargeAccountTypeId', ParseIntPipe) customer_type_id: number, 
        @Body() payload: UpdateChargeAccountTypeDto,
    ){
        return this.chargeAccountType.update(customer_type_id, payload);
    }

    @Delete(':chargeAccountTypeId')
    @HttpCode(HttpStatus.OK)
    delete(@Param('chargeAccountTypeId', ParseIntPipe) customer_type_id: number){
        return this.chargeAccountType.delete(customer_type_id);
    }
}
