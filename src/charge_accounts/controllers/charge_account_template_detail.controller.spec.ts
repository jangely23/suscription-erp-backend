import { Test, TestingModule } from '@nestjs/testing';
import { ChargeAccountTemplateDetailsController } from './charge_account_template_detail.controller';

describe('ChargeAccountTemplateDetailsController', () => {
  let controller: ChargeAccountTemplateDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChargeAccountTemplateDetailsController],
    }).compile();

    controller = module.get<ChargeAccountTemplateDetailsController>(ChargeAccountTemplateDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
