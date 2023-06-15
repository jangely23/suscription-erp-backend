import { Injectable } from '@nestjs/common';
import { UserService } from './../../users/services/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private userService: UserService){}

    async validateUser(username: string, password: string){
        const user =  await this.userService.findByEmailOrUser(username);
        const isMatch = await bcrypt.compare(password, user.password);

        if(user && isMatch) {
            return user;
        }

        return null;
    }
}
