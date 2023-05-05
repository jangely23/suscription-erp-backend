import { Test, TestingModule } from '@nestjs/testing';
import { CustomerOrdersController } from './customer_orders.controller';

describe('CustomerOrdersController', () => {
  let controller: CustomerOrdersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerOrdersController],
    }).compile();

    controller = module.get<CustomerOrdersController>(CustomerOrdersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
