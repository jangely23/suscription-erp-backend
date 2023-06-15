import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from 'src/customers/entities/customer.entity';
import { CustomerModule } from 'src/customers/customers.module';

@Module({
  imports: [TypeOrmModule.forFeature([User, Customer]), CustomerModule],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService]
})
export class UsersModule {}
