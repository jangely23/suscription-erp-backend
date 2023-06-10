import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from '../services/user.service';
import { CreateUserDto, FilterUserDto, UpdateUserDto } from '../dtos/user.dto';

@ApiTags('User Customer')
@Controller('user')
export class UserController {
    constructor(private user: UserService){}

    @Get(':customerId')
    @HttpCode(HttpStatus.ACCEPTED)
    getAllByCustomer(
        @Param('customerId', ParseIntPipe) customer_id: number,
        @Query() params: FilterUserDto
    ){
        return this.user.findAllByCustomer(customer_id, params);
    }

    @Get('one/:userId')
    @HttpCode(HttpStatus.ACCEPTED)
    getOne( @Param('userId', ParseIntPipe) user_id: number ){
        return this.user.findOne(user_id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create( @Body() payload: CreateUserDto){
        return this.user.create(payload);
    }

    @Put(':userId')
    @HttpCode(HttpStatus.OK)
    update(
        @Body() payload: UpdateUserDto,
        @Param('userId', ParseIntPipe) user_id: number
    ){
        return this.user.update(user_id, payload);
    }

    @Delete(':userId')
    @HttpCode(HttpStatus.OK)
    delete(@Param('userId', ParseIntPipe) user_id: number){
        return this.user.delete(user_id);
    }    
}
