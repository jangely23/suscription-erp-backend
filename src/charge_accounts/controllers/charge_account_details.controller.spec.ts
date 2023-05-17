import { Test, TestingModule } from '@nestjs/testing';
import { ChargeAccountDetailsController } from './charge_account_details.controller';

describe('ChargeAccountDetailsController', () => {
  let controller: ChargeAccountDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChargeAccountDetailsController],
    }).compile();

    controller = module.get<ChargeAccountDetailsController>(ChargeAccountDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
