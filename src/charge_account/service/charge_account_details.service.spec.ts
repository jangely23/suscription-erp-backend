import { Test, TestingModule } from '@nestjs/testing';
import { ChargeAccountDetailsService } from './charge_account_details.service';

describe('ChargeAccountDetailsService', () => {
  let service: ChargeAccountDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChargeAccountDetailsService],
    }).compile();

    service = module.get<ChargeAccountDetailsService>(ChargeAccountDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
