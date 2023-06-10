import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto, FilterUserDto, UpdateUserDto } from '../dtos/user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private user: Repository<User>
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
            })
        }

        if(!allUsers){
            throw new NotFoundException('User is empty');
        }

        return allUsers;
    }

    async findOne(user_id: number){
        const oneUser = await this.user.findOne({
            where:{ user_id }
        })

        if(!oneUser){
            throw new NotFoundException('User not found');
        }

        return oneUser;
    }

    create(data: CreateUserDto){
        const newUser = this.user.create(data);

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
