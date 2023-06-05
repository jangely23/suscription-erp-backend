import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer_type } from '../entities/customer_type.entity';
import { Repository } from 'typeorm';
import { CreateCustomerTypeDto, UpdateCustomerTypeDto } from '../dtos/customer_type.dto';


@Injectable()
export class CustomerTypeService {
  constructor(
    @InjectRepository(Customer_type)
    private customerTypeRepo: Repository<Customer_type>,
  ) {}

  async findAll(): Promise<Customer_type[]> {
    const customsType = await this.customerTypeRepo.find();
    if (!customsType) {
      throw new NotFoundException(`Custom type empty`);
    }

    return customsType;
  }

  async findOne(customer_type_id: number): Promise<Customer_type | undefined> {
    const customerType = await this.customerTypeRepo.findOneBy({
      customer_type_id,
    });

    if(!customerType){
        throw new InternalServerErrorException('Custom type error')
    }

    return customerType;
  }

  create(data: CreateCustomerTypeDto){
    const newCustomerType = this.customerTypeRepo.create(data);
    return this.customerTypeRepo.save(newCustomerType);
  }

  async update(customer_type_id: number, changes:UpdateCustomerTypeDto){
    const currentCustomerType = await this.customerTypeRepo.findOne({
      where:{customer_type_id}
    })

    if(!currentCustomerType){
      throw new NotFoundException(`Customer type not exists`)
    }
    
    this.customerTypeRepo.merge(currentCustomerType, changes);

    return this.customerTypeRepo.save(currentCustomerType);
  }

  async delete(customer_type_id: number){
    const customerType = await this.customerTypeRepo.findOne({
      where:{customer_type_id}
    })

    if(!customerType){
      throw new NotFoundException(`Customer type not exists`)
    }

    return this.customerTypeRepo.delete(customer_type_id);
  }
}
