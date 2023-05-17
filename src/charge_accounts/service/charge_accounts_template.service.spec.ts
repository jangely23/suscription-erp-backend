import { Test, TestingModule } from '@nestjs/testing';
import { ChargeAccountsTemplateService } from './charge_accounts_template.service';

describe('ChargeAccountsTemplateService', () => {
  let service: ChargeAccountsTemplateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChargeAccountsTemplateService],
    }).compile();

    service = module.get<ChargeAccountsTemplateService>(ChargeAccountsTemplateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
