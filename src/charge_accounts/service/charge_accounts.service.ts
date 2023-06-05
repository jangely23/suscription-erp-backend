import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Charge_account } from '../entities/charge_account.entity';
import { Repository } from 'typeorm';
import { CreateChargeAccountDto, FilterChargeAccountDto, UpdateChargeAccountDto } from '../dtos/charge_account.dto';

@Injectable()
export class ChargeAccountsService {
    constructor(
        @InjectRepository(Charge_account)
        private charge_account: Repository<Charge_account>,
    ){}

    async findAllByCompany(company_id: number, params: FilterChargeAccountDto): Promise<Charge_account[]>{
               
        let allChargeAccount;

        if(params){
            const {limit, offset} =params;

            allChargeAccount = await this.charge_account.find({
                where:{
                    company:{
                        customer_id:company_id,
                    }
                },
                take: limit,
                skip: offset
            })
        }else{
            allChargeAccount = await this.charge_account.find({
                where:{
                    company:{
                        customer_id:company_id,
                    }
                }
            })
        }

        if(!allChargeAccount){
            throw new NotFoundException('Charge account is empty');
        }

        return allChargeAccount;
    }

    async findAllByCustomer(company_id: number, customer_id: number, params: FilterChargeAccountDto): Promise<Charge_account[]>{
                       
        let allChargeAccount;

        if(params){
            const {limit, offset} =params;
            allChargeAccount = await this.charge_account.find({
                where:{
                    company:{
                        customer_id:company_id,
                    },
                    customer:{
                        customer_id,
                    }
                },
                take: limit,
                skip: offset
            })
        }else{
            allChargeAccount = await this.charge_account.find({
                where:{
                    company:{
                        customer_id:company_id,
                    },
                    customer:{
                        customer_id,
                    }
                }
            })
        }

        if(!allChargeAccount){
            throw new NotFoundException('Charge account is empty');
        }

        return allChargeAccount;
    }

    async findOne(charge_account_id: number): Promise<Charge_account | undefined>{
        const chargeAccount = await this.charge_account.findOne({
            relations:{
                charge_account_details: true,
            },
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

        return this.charge_account.delete(charge_account_id);
    }

}
