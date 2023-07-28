import { Controller, Get } from '@nestjs/common';
import { TruyenchuService } from './truyenchu.service';

@Controller('truyenchu')
export class TruyenchuController {
  constructor(private readonly truyenchuService: TruyenchuService) {}

  @Get()
  async crawlTruyenchu(): Promise<any> {
    const url = 'https://truyenchu.vn';
    const truyenInfo = await this.truyenchuService.crawlTruyenChu(url);
    return truyenInfo;
  }
}
