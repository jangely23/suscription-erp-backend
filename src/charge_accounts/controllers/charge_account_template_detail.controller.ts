import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ChargeAccountTemplateDetailsService } from '../service/charge_account_template_detail.service';
import { CreateChargeAccountTemplateDetailsDto, FilterChargeAccountTemplateDetailDto, UpdateChargeAccountTemplateDetailDto } from '../dtos/charge_account_template_details.dto';
import { RoleGuard } from 'src/auth/guards/role.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ApikeyGuard } from 'src/auth/guards/apikey.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Charge account template details')
@UseGuards(ApikeyGuard, JwtAuthGuard, RoleGuard)
@Controller('charge-account-template-details')
export class ChargeAccountTemplateDetailsController {
        constructor(private chargeAccountTemplateDetails: ChargeAccountTemplateDetailsService){}

    @Get(':chargeAccountTemplateId')
    @HttpCode(HttpStatus.ACCEPTED)
    getAllByOrder(
        @Param('chargeAccountTemplateId', ParseIntPipe) charge_account_template_id: number,
        @Query() params: FilterChargeAccountTemplateDetailDto
    ){
        return this.chargeAccountTemplateDetails.findAll(charge_account_template_id, params)
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
    }
}
