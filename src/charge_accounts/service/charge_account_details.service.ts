import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateChargeAccountDetailsDto, UpdateChargeAccountDetailDto } from '../dtos/charge_account_details.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Charge_account_detail } from '../entities/charge_account_detail.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChargeAccountDetailsService {
    /* constructor(
        @InjectRepository(Charge_account_detail) 
        private charge_account_detail: Repository<Charge_account_detail>,
    ){}

    findAll(charge_account_detail_id: number): Promise<Charge_account_detail[]>{
        const allChargeAccountDetail = this.charge_account_detail.find({
            where: {
                charge_account_detail_id
            },
        })

        if(!allChargeAccountDetail){
            throw new NotFoundException('Charge account detail is empty');
        }

        return allChargeAccountDetail;
    }


    async findOne(charge_account_detail_id: number): Promise<Charge_account_detail | undefined>{
        const chargeAccountDetail = await this.charge_account_detail.findOne({
            where: {
                charge_account_detail_id
            },
        })

        if(!chargeAccountDetail){
            throw new NotFoundException('Charge account detail not found');
        }

        return chargeAccountDetail;
    }


    create(data: CreateChargeAccountDetailsDto){
        const chargeAccountDetail = this.charge_account_detail.create(data);
 
        return this.charge_account_detail.save(chargeAccountDetail);
    }


    async update(charge_account_detail_id: number, changes: UpdateChargeAccountDetailDto) {
        const chargeAccountDetail = await this.charge_account_detail.findOne({
            where: {
                charge_account_detail_id
            },
        })

        if(!chargeAccountDetail){
            throw new NotFoundException('Charge account detail not found');
        }

        this.charge_account_detail.merge(chargeAccountDetail, changes);
        
        return this.charge_account_detail.save(chargeAccountDetail);
    }

    async delete(charge_account_detail_id: number) {
        const chargeAccountDetail = await this.charge_account_detail.findOne({
            where: {
                charge_account_detail_id
            },
        })

        if(!chargeAccountDetail){
            throw new NotFoundException('Charge account detail not found');
        }
        
        return this.charge_account_detail.delete(chargeAccountDetail);
    } */
}
