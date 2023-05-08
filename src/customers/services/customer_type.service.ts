import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer_type } from '../entities/customer_type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerTypeService {
  constructor(
    @InjectRepository(Customer_type)
    private customerTypeRepo: Repository<Customer_type>,
  ) {}

  findAll(): Promise<Customer_type[]> {
    const customsType = this.customerTypeRepo.find();
    if (!customsType) {
      throw new NotFoundException(`Custom type empty`);
    }

    return customsType;
  }

  findOne(customer_type_id: number): Promise<Customer_type | undefined> {
    const customerType = this.customerTypeRepo.findOneBy({
      customer_type_id,
    });

    if(!customerType){
        throw new InternalServerErrorException('Custom type error')
    }

    return customerType;
  }
}
