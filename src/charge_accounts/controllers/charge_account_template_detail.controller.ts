import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
/* import { ChargeAccountTemplateDetailsService } from '../service/charge_account_template_detail.service';
import { CreateChargeAccountTemplateDetailsDto, UpdateChargeAccountTemplateDetailDto } from '../dtos/charge_account_template_details.dto';
 */
@Controller('charge-account-template-details')
export class ChargeAccountTemplateDetailsController {
        /*constructor(private chargeAccountTemplateDetails: ChargeAccountTemplateDetailsService){}

    @Get(':chargeAccountTemplateId')
    @HttpCode(HttpStatus.ACCEPTED)
    getAllByOrder(
        @Param('chargeAccountTemplateId', ParseIntPipe) charge_account_template_id: number
    ){
        return this.chargeAccountTemplateDetails.findAll(charge_account_template_id)
    }

    @Get('charge-account-template-details/:chargeAccountTemplateDetailId')
    @HttpCode(HttpStatus.ACCEPTED)
    getOne(
        @Param('chargeAccountTemplateDetailId', ParseIntPipe) charge_account_template_detail_id: number
    ){
        return this.chargeAccountTemplateDetails.findOne(charge_account_template_detail_id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(
        @Body() payload: CreateChargeAccountTemplateDetailsDto
    ){
        return this.chargeAccountTemplateDetails.create(payload)
    }

    @Put(':chargeAccountTemplateDetailId')
    @HttpCode(HttpStatus.OK)
    update(
        @Body() payload: UpdateChargeAccountTemplateDetailDto,
        @Param('chargeAccountTemplateDetailId', ParseIntPipe) charge_account_template_detail_id: number
    ){
        return this.chargeAccountTemplateDetails.update(charge_account_template_detail_id, payload);
    }

    @Delete(':chargeAccountTemplateDetailId')
    @HttpCode(HttpStatus.OK)
    delete(
        @Param('chargeAccountTemplateDetailId', ParseIntPipe) charge_account_template_detail_id: number
    ){
        return this.chargeAccountTemplateDetails.delete(charge_account_template_detail_id);
    } */
}
