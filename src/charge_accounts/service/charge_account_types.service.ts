import { Injectable, NotFoundException } from '@nestjs/common';
import { Charge_account_type } from '../entities/charge_account_type.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateChargeAccountTypeDto, UpdateChargeAccountTypeDto } from '../dtos/charge_account_type.dto';



@Injectable()
export class ChargeAccountTypesService {
    constructor(
        @InjectRepository(Charge_account_type)
        private charge_acount_type: Repository<Charge_account_type>,
    ){}

    async findAll(): Promise<Charge_account_type[]>{
        const chargeAccountType = await this.charge_acount_type.find();

        if(!chargeAccountType){
            throw new NotFoundException('Charge account type is empty')
        }

        return chargeAccountType
    }

    async findOne(charge_account_type_id: number): Promise<Charge_account_type | undefined> {
        const chargeAccountType = await this.charge_acount_type.findOne({
            where:{
                charge_account_type_id
            }
        });

        if(!chargeAccountType){
            throw new NotFoundException('Charge account type is empty')
        }

        return chargeAccountType
    }

    create(data: CreateChargeAccountTypeDto){
        const chargeAccountType = this.charge_acount_type.create(data);
        return this.charge_acount_type.save(chargeAccountType);
    }

    async update(charge_account_type_id: number, changes: UpdateChargeAccountTypeDto){
        const currentChargeAccountType = await this.charge_acount_type.findOne({
            where:{ charge_account_type_id }
        })

        if(!currentChargeAccountType){
            throw new NotFoundException('Charge account type not found');
        }

        this.charge_acount_type.merge(currentChargeAccountType, changes);

        return this.charge_acount_type.save(currentChargeAccountType);
    }

    async delete(charge_account_type_id: number){
        const chargeAccountType = await this.charge_acount_type.findOne({
            where:{ charge_account_type_id }
        });

        if(!chargeAccountType){
            throw new NotFoundException('Charge account type not found');
        }

        return this.charge_acount_type.delete(charge_account_type_id)
    }
}
