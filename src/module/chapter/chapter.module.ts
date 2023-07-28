import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chapter } from 'src/entity/chapter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Chapter])],
})
export class ChapterModule {}
