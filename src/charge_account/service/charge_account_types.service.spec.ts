import { Test, TestingModule } from '@nestjs/testing';
import { ChargeAccountTypesService } from './charge_account_types.service';

describe('ChargeAccountTypesService', () => {
  let service: ChargeAccountTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChargeAccountTypesService],
    }).compile();

    service = module.get<ChargeAccountTypesService>(ChargeAccountTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
