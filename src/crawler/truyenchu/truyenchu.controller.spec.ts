import { Test, TestingModule } from '@nestjs/testing';
import { TruyenchuController } from './truyenchu.controller';

describe('TruyenchuController', () => {
  let controller: TruyenchuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TruyenchuController],
    }).compile();

    controller = module.get<TruyenchuController>(TruyenchuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
