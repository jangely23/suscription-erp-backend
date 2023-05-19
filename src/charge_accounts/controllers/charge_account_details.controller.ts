import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
/* import { ChargeAccountDetailsService } from '../service/charge_account_details.service';
import { CreateChargeAccountDetailsDto, UpdateChargeAccountDetailDto } from '../dtos/charge_account_details.dto'; */

@Controller('charge-account-details')
export class ChargeAccountDetailsController {
    /*constructor(private chargeAccountDetail: ChargeAccountDetailsService){}

    @Get(':chargeAccountId')
    @HttpCode(HttpStatus.ACCEPTED)
    getAllByOrder(
        @Param('chargeAccountId', ParseIntPipe) charge_account_id: number
    ){
        return this.chargeAccountDetail.findAll(charge_account_id)
    }

    @Get('charge-account-detail/:chargeAccountDetailId')
    @HttpCode(HttpStatus.ACCEPTED)
    getOne(
        @Param('chargeAccountDetailId', ParseIntPipe) charge_account_detail_id: number
    ){
        return this.chargeAccountDetail.findOne(charge_account_detail_id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(
        @Body() payload: CreateChargeAccountDetailsDto
    ){
        return this.chargeAccountDetail.create(payload)
    }

    @Put(':chargeAccountDetailId')
    @HttpCode(HttpStatus.OK)
    update(
        @Body() payload: UpdateChargeAccountDetailDto,
        @Param('chargeAccountDetailId', ParseIntPipe) charge_account_detail_id: number
    ){
        return this.chargeAccountDetail.update(charge_account_detail_id, payload);
    }

    @Delete(':chargeAccountDetailId')
    @HttpCode(HttpStatus.OK)
    delete(
        @Param('chargeAccountDetailId', ParseIntPipe) charge_account_detail_id: number
    ){
        return this.chargeAccountDetail.delete(charge_account_detail_id);
    } */
}
