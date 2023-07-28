import { Module } from '@nestjs/common';
import { TruyenchuController } from './truyenchu/truyenchu.controller';
import { TruyenchuService } from './truyenchu/truyenchu.service';

@Module({
  controllers: [TruyenchuController],
  providers: [TruyenchuService],
})
export class CrawlModule {}
