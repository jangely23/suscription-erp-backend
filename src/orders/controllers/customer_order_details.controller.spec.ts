import { Test, TestingModule } from '@nestjs/testing';
import { CustomerOrderDetailsController } from './customer_order_details.controller';

describe('CustomerOrderDetailsController', () => {
  let controller: CustomerOrderDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerOrderDetailsController],
    }).compile();

    controller = module.get<CustomerOrderDetailsController>(CustomerOrderDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
