import { Test, TestingModule } from '@nestjs/testing';
import { ChargeAccountsTemplateController } from './charge_account_template.controller';

describe('ChargeAccountsTemplateController', () => {
  let controller: ChargeAccountsTemplateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChargeAccountsTemplateController],
    }).compile();

    controller = module.get<ChargeAccountsTemplateController>(ChargeAccountsTemplateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
