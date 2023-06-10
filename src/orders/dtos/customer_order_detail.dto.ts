import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Min } from 'class-validator';

export class CreateCustomerOrderDetailDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly customer_order_id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly product_id: number;
    
  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly observation: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly quantity: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly value: number;
}

export class UpdateCustomerOrderDetailDto extends PartialType(
  CreateCustomerOrderDetailDto,
) {}

export class FilterCustomerOrderDetailDto{
  @IsOptional()
  @IsNumber()
  @IsPositive()
  limit: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  offset: number;
}
