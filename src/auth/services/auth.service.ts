import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { UserService } from './../../users/services/user.service';
import { User } from 'src/users/entities/user.entity';
import { PayloadToken } from '../models/token.model';
@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ){}

    async validateUser(username: string, password: string){
        const user =  await this.userService.findByEmailOrUser(username);

        if(user) {
            const isMatch = await bcrypt.compare(password, user.password);
            if(isMatch){
                return user;
            }  
        }

        return null;
    }

    generateJWT(user: User) {

        const payload: PayloadToken = { 
            typeCustomer: user.userCustomer.customer_type.customer_type, 
            role: user.role, 
            sub: user.user_id};
        return {
            access_token: this.jwtService.sign(payload),
            user,
        };
    }
}