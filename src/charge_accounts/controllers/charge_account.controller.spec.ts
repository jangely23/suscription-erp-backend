import { Test, TestingModule } from '@nestjs/testing';
import { ChargeAccountController } from './charge_account.controller';

describe('ChargeAccountController', () => {
  let controller: ChargeAccountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChargeAccountController],
    }).compile();

    controller = module.get<ChargeAccountController>(ChargeAccountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
