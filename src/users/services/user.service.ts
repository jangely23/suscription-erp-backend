import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { CreateUserDto, FilterUserDto, UpdateUserDto } from '../dtos/user.dto';
import { CustomersService } from 'src/customers/services/customers.service';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private user: Repository<User>,
        private customerService: CustomersService
    ){}

    async findAllByCustomer(customer_id: number, params: FilterUserDto){
        let allUsers;

        if(params){
            const {limit, offset} = params;

            allUsers = await this.user.find({
                where:{
                    userCustomer:{
                        customer_id
                    }
                },
                select:['name','email','role','status','username','status'],
                take: limit,
                skip: offset
            })
        }else{
            allUsers = await this.user.find({
                where:{
                    userCustomer:{
                        customer_id
                    }
                },
                select:['name','email','role','status','username','status'],
            })
        }

        if(!allUsers){
            throw new NotFoundException('User is empty');
        }

        return allUsers;
    }

    async findOne(user_id: number){
        const oneUser = await this.user.findOne({
            where:{ user_id },
            select:['name','email','role','status','username','status']
        })

        if(!oneUser){
            throw new NotFoundException('User not found');
        }

        return oneUser;
    }

    async findByEmailOrUser(username: string){
        
        const oneUser = await this.user.findOne({
            relations: { 
                userCustomer: {
                    customer_type: true,
                } 
            },
            where:[
                { status: 'active', username } ,
                { status: 'active', email:username }
            ],
            
        })

        if(!oneUser){
            throw new NotFoundException('User not found');
        }

        return oneUser;
    }

    async create(data: CreateUserDto){
        const userIfExist = await this.user.findOne({
            where:{ email: data.email}
        })

        if(userIfExist){
            throw new NotAcceptableException(`Email ${data.email} in use by another user.`)
        }

        const newUser = this.user.create(data);

        // parameters from hash: password, number of hops
        const hashPassword = await bcrypt.hash(newUser.password, 10);
        newUser.password = hashPassword;

        if(data.customer_id){
            const customer = await this.customerService.findOne(data.customer_id);
            newUser.userCustomer = customer;
        }

        return this.user.save(newUser);
    }

    async update(user_id: number, changes: UpdateUserDto){
        const currentUser = await this.user.findOne({
            where:{ user_id }
        })

        if(!currentUser){
            throw new NotFoundException('User not found');
        }

        this.user.merge(currentUser, changes);

        // parameters from hash: password, number of hops
        const hashPassword = await bcrypt.hash(currentUser.password, 10);
        currentUser.password = hashPassword;

        return this.user.save(currentUser);
    }

    async delete(user_id: number){
        const currentUser = await this.user.findOne({
            where:{ user_id }
        })

        if(!currentUser){
            throw new NotFoundException('User not found');
        }

        return this.user.delete(user_id);
    }
}
