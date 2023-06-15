import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Min } from 'class-validator';

export class CreateCustomerOrderDto {

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly customer_id: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly company_id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({example:[ 'pending','process','success','cancelled','none' ]})
  readonly status: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly full_value: number;
}

export class UpdateCustomerOrderDto extends PartialType(CreateCustomerOrderDto){};

export class FilterCustomerOrderDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  limit: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  offset: number;
}