import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ChargeAccountDetailsService } from '../service/charge_account_details.service';
import { CreateChargeAccountDetailsDto, FilterChargeAccountDetailDto, UpdateChargeAccountDetailDto } from '../dtos/charge_account_details.dto';
import { RoleGuard } from 'src/auth/guards/role.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ApikeyGuard } from 'src/auth/guards/apikey.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/decorators/role.decorator';
import { Role } from 'src/auth/models/role.model';

@ApiBearerAuth()
@ApiTags('Charge account details')
@UseGuards(ApikeyGuard, JwtAuthGuard, RoleGuard)
@Controller('charge-account-details')
export class ChargeAccountDetailsController {
    constructor(private chargeAccountDetail: ChargeAccountDetailsService){}

    @Roles(Role.ADMIN, Role.OPERATOR)
    @Get(':chargeAccountId')
    @HttpCode(HttpStatus.ACCEPTED)
    getAllByOrder(
        @Param('chargeAccountId', ParseIntPipe) charge_account_id: number,
        @Query() params: FilterChargeAccountDetailDto
    ){
        return this.chargeAccountDetail.findAll(charge_account_id, params)
    }

    @Roles(Role.ADMIN, Role.OPERATOR)
    @Get('charge-account-detail/:chargeAccountDetailId')
    @HttpCode(HttpStatus.ACCEPTED)
    getOne(
        @Param('chargeAccountDetailId', ParseIntPipe) charge_account_detail_id: number
    ){
        return this.chargeAccountDetail.findOne(charge_account_detail_id)
    }

    @Roles(Role.ADMIN, Role.OPERATOR)
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(
        @Body() payload: CreateChargeAccountDetailsDto
    ){
        return this.chargeAccountDetail.create(payload)
    }

    @Roles(Role.ADMIN, Role.OPERATOR)
    @Put(':chargeAccountDetailId')
    @HttpCode(HttpStatus.OK)
    update(
        @Body() payload: UpdateChargeAccountDetailDto,
        @Param('chargeAccountDetailId', ParseIntPipe) charge_account_detail_id: number
    ){
        return this.chargeAccountDetail.update(charge_account_detail_id, payload);
    }

    @Roles(Role.ADMIN, Role.OPERATOR)
    @Delete(':chargeAccountDetailId')
    @HttpCode(HttpStatus.OK)
    delete(
        @Param('chargeAccountDetailId', ParseIntPipe) charge_account_detail_id: number
    ){
        return this.chargeAccountDetail.delete(charge_account_detail_id);
    }
}
