import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Charge_account } from '../entities/charge_account.entity';
import { Repository } from 'typeorm';
import { CreateChargeAccountDto, UpdateChargeAccountDto } from '../dtos/charge_account.dto';

@Injectable()
export class ChargeAccountsService {
    constructor(
        @InjectRepository(Charge_account)
        private charge_account: Repository<Charge_account>,
    ){}

    /* findAllByCompany(company_id: number): Promise<Charge_account[]>{
        const allChargeAccount = this.charge_account.find({
            where:{
                company_id,
            }
        })

        if(!allChargeAccount){
            throw new NotFoundException('Charge account is empty');
        }

        return allChargeAccount;
    }

    findAllByCustomer(company_id: number, customer_id: number): Promise<Charge_account[]>{
        const allChargeAccount = this.charge_account.find({
            where:{
                company_id,
                customer_id,
            }
        })

        if(!allChargeAccount){
            throw new NotFoundException('Charge account is empty');
        }

        return allChargeAccount;
    }

    async findOne(charge_account_id: number): Promise<Charge_account | undefined>{
        const chargeAccount = await this.charge_account.findOne({
            where:{
                charge_account_id,
            }
        })

        if(!chargeAccount){
            throw new NotFoundException('Charge account not found');
        }

        return chargeAccount
    }

    create(data: CreateChargeAccountDto){
        const chargeAccount = this.charge_account.create(data);

        return this.charge_account.save(chargeAccount);
    }
    
    async update(charge_account_id: number, changes: UpdateChargeAccountDto){
        const chargeAccount = await this.charge_account.findOne({
            where:{
                charge_account_id,
            }
        })

        if(!chargeAccount){
            throw new NotFoundException('Charge account not found');
        }

        this.charge_account.merge(chargeAccount, changes);

        return this.charge_account.save(chargeAccount);
    }

    async delete(charge_account_id: number){
        const chargeAccount = await this.charge_account.findOne({
            where:{
                charge_account_id,
            }
        })

        if(!chargeAccount){
            throw new NotFoundException('Charge account not found');
        }

        return this.charge_account.delete(chargeAccount);
    } */

}
