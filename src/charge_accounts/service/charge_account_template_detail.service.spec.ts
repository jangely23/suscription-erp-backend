import { Test, TestingModule } from '@nestjs/testing';
import { ChargeAccountTemplateDetailsService } from './charge_account_template_detail.service';

describe('ChargeAccountTemplateDetailsService', () => {
  let service: ChargeAccountTemplateDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChargeAccountTemplateDetailsService],
    }).compile();

    service = module.get<ChargeAccountTemplateDetailsService>(ChargeAccountTemplateDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
