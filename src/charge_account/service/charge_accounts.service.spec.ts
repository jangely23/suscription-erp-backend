import { Test, TestingModule } from '@nestjs/testing';
import { ChargeAccountsService } from './charge_accounts.service';

describe('ChargeAccountsService', () => {
  let service: ChargeAccountsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChargeAccountsService],
    }).compile();

    service = module.get<ChargeAccountsService>(ChargeAccountsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
