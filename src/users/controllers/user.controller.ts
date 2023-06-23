import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserService } from '../services/user.service';
import { CreateUserDto, FilterUserDto, UpdateUserDto } from '../dtos/user.dto';
import { ApikeyGuard } from 'src/auth/guards/apikey.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RoleGuard } from 'src/auth/guards/role.guard';
import { Roles } from 'src/auth/decorators/role.decorator';
import { Role } from 'src/auth/models/role.model';
import { Public } from 'src/auth/decorators/public.decorator';

@ApiBearerAuth()
@ApiTags('User Customer')
@UseGuards(ApikeyGuard, JwtAuthGuard, RoleGuard)
@Controller('users')
export class UserController {
    constructor(private user: UserService){}

    @Roles(Role.ADMIN, Role.OPERATOR)
    @Get('one/:userId')
    @HttpCode(HttpStatus.ACCEPTED)
    getOne( @Param('userId', ParseIntPipe) user_id: number ){
        return this.user.findOne(user_id);
    }

    @Roles(Role.ADMIN, Role.OPERATOR)
    @Get(':customerId')
    @HttpCode(HttpStatus.ACCEPTED)
    getAllByCustomer(
        @Param('customerId', ParseIntPipe) customer_id: number,
        @Query() params: FilterUserDto
    ){
        return this.user.findAllByCustomer(customer_id, params);
    }

    @Roles(Role.ADMIN, Role.OPERATOR)
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create( @Body() payload: CreateUserDto){
        return this.user.create(payload);
    }

    
    @Roles(Role.ADMIN, Role.OPERATOR)
    @Put(':userId')
    @HttpCode(HttpStatus.OK)
    update(
        @Body() payload: UpdateUserDto,
        @Param('userId', ParseIntPipe) user_id: number
    ){
        return this.user.update(user_id, payload);
    }

    @Roles(Role.ADMIN, Role.OPERATOR)
    @Delete(':userId')
    @HttpCode(HttpStatus.OK)
    delete(@Param('userId', ParseIntPipe) user_id: number){
        return this.user.delete(user_id);
    }    
}
