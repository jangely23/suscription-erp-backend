import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Charge_account_template } from '../entities/charge_account_template.entity';
import { CreateChargeAccountTemplateDto, UpdateChargeAccountTemplateDto } from '../dtos/charge_account_template.dto';

@Injectable()
export class ChargeAccountsTemplateService {
    constructor(
        @InjectRepository(Charge_account_template)
        private charge_account_template: Repository<Charge_account_template>,
    ){}

    /* findAllByCompany(company_id: number): Promise<Charge_account_template[]>{
        const allChargeAccountTemplate = this.charge_account_template.find({
            where:{
                company_id,
            }
        })

        if(!allChargeAccountTemplate){
            throw new NotFoundException('Charge account template is empty');
        }

        return allChargeAccountTemplate;
    }

    findAllByCustomer(company_id: number, customer_id: number): Promise<Charge_account_template[]>{
        const allChargeAccountTemplate = this.charge_account_template.find({
            where:{
                company_id,
                customer_id,
            }
        })

        if(!allChargeAccountTemplate){
            throw new NotFoundException('Charge account template is empty');
        }

        return allChargeAccountTemplate;
    }

    async findOne(charge_account_template_id: number): Promise<Charge_account_template | undefined>{
        const chargeAccountTemplate = await this.charge_account_template.findOne({
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

        return this.charge_account_template.delete(chargeAccountTemplate);
    } */

}
