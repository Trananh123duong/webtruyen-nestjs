import { Test, TestingModule } from '@nestjs/testing';
import { TruyenchuService } from './truyenchu.service';

describe('TruyenchuService', () => {
  let service: TruyenchuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TruyenchuService],
    }).compile();

    service = module.get<TruyenchuService>(TruyenchuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
