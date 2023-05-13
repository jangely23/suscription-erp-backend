import { Test, TestingModule } from '@nestjs/testing';
import { ChargeAccountTypeController } from './charge_account_type.controller';

describe('ChargeAccountTypeController', () => {
  let controller: ChargeAccountTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChargeAccountTypeController],
    }).compile();

    controller = module.get<ChargeAccountTypeController>(ChargeAccountTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
