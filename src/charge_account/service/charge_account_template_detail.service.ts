import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Charge_account_template_detail } from '../entities/charge_account_template_detail.entity';
import { Repository } from 'typeorm';
import { CreateChargeAccountTemplateDetailsDto, UpdateChargeAccountTemplateDetailDto } from '../dtos/charge_account_template_details.dto';

@Injectable()
export class ChargeAccountTemplateDetailsService {
    constructor(
        @InjectRepository(Charge_account_template_detail) 
        private charge_account_template_detail: Repository<Charge_account_template_detail>,
    ){}

    findAll(charge_account_template_detail_id: number): Promise<Charge_account_template_detail[]>{
        const allChargeAccountTemplateDetail = this.charge_account_template_detail.find({
            where: {
                charge_account_template_detail_id
            },
        })

        if(!allChargeAccountTemplateDetail){
            throw new NotFoundException('Charge account template detail is empty');
        }

        return allChargeAccountTemplateDetail;
    }


    async findOne(charge_account_template_detail_id: number): Promise<Charge_account_template_detail | undefined>{
        const chargeAccountTemplateDetail = await this.charge_account_template_detail.findOne({
            where: {
                charge_account_template_detail_id
            },
        })

        if(!chargeAccountTemplateDetail){
            throw new NotFoundException('Charge account template detail not found');
        }

        return chargeAccountTemplateDetail;
    }


    create(data: CreateChargeAccountTemplateDetailsDto){
        const chargeAccountTemplateDetail = this.charge_account_template_detail.create(data);
 
        return this.charge_account_template_detail.save(chargeAccountTemplateDetail);
    }


    async update(charge_account_template_detail_id: number, changes: UpdateChargeAccountTemplateDetailDto) {
        const chargeAccountTemplateDetail = await this.charge_account_template_detail.findOne({
            where: {
                charge_account_template_detail_id
            },
        })

        if(!chargeAccountTemplateDetail){
            throw new NotFoundException('Charge account template detail not found');
        }

        this.charge_account_template_detail.merge(chargeAccountTemplateDetail, changes);
        
        return this.charge_account_template_detail.save(chargeAccountTemplateDetail);
    }

    async delete(charge_account_template_detail_id: number) {
        const chargeAccountTemplateDetail = await this.charge_account_template_detail.findOne({
            where: {
                charge_account_template_detail_id
            },
        })

        if(!chargeAccountTemplateDetail){
            throw new NotFoundException('Charge account template detail not found');
        }
        
        return this.charge_account_template_detail.delete(chargeAccountTemplateDetail);
    }
}
