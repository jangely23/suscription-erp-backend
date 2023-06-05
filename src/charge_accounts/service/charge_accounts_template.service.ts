import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Charge_account_template } from '../entities/charge_account_template.entity';
import { CreateChargeAccountTemplateDto, FilterChargeAccountTemplateDto, UpdateChargeAccountTemplateDto } from '../dtos/charge_account_template.dto';

@Injectable()
export class ChargeAccountsTemplateService {
    constructor(
        @InjectRepository(Charge_account_template)
        private charge_account_template: Repository<Charge_account_template>,
    ){}

    async findAllByCompany(company_id: number, params: FilterChargeAccountTemplateDto): Promise<Charge_account_template[]>{
                      
        let allChargeAccountTemplate;

        if(params){
            const {limit, offset} =params;

            allChargeAccountTemplate = await this.charge_account_template.find({
                where:{
                    company:{
                        customer_id:company_id,
                    }
                },
                take: limit,
                skip: offset
            })
        }else{
            allChargeAccountTemplate = await this.charge_account_template.find({
                where:{
                    company:{
                        customer_id:company_id,
                    }
                }
            })
        }

        if(!allChargeAccountTemplate){
            throw new NotFoundException('Charge account template is empty');
        }

        return allChargeAccountTemplate;
    }

    async findAllByCustomer(company_id: number, customer_id: number, params: FilterChargeAccountTemplateDto): Promise<Charge_account_template[]>{
                              
        let allChargeAccountTemplate;

        if(params){
            const {limit, offset} =params;

            allChargeAccountTemplate = await this.charge_account_template.find({
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
            allChargeAccountTemplate = await this.charge_account_template.find({
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


        if(!allChargeAccountTemplate){
            throw new NotFoundException('Charge account template is empty');
        }

        return allChargeAccountTemplate;
    }

    async findOne(charge_account_template_id: number): Promise<Charge_account_template | undefined>{
        const chargeAccountTemplate = await this.charge_account_template.findOne({
            relations:{
                charge_account_template_details: true,
            },
            where:{
                charge_account_template_id,
            }
        })

        if(!chargeAccountTemplate){
            throw new NotFoundException('Charge account template not found');
        }

        return chargeAccountTemplate
    }

    create(data: CreateChargeAccountTemplateDto){
        const chargeAccountTemplate = this.charge_account_template.create(data);

        return this.charge_account_template.save(chargeAccountTemplate);
    }
    
    async update(charge_account_template_id: number, changes: UpdateChargeAccountTemplateDto){
        const chargeAccountTemplate = await this.charge_account_template.findOne({
            where:{
                charge_account_template_id,
            }
        })

        if(!chargeAccountTemplate){
            throw new NotFoundException('Charge account template not found');
        }

        this.charge_account_template.merge(chargeAccountTemplate, changes);

        return this.charge_account_template.save(chargeAccountTemplate);
    }

    async delete(charge_account_template_id: number){
        const chargeAccountTemplate = await this.charge_account_template.findOne({
            where:{
                charge_account_template_id,
            }
        })

        if(!chargeAccountTemplate){
            throw new NotFoundException('Charge account template not found');
        }

        return this.charge_account_template.delete(charge_account_template_id);
    }

}
