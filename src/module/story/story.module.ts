import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Story } from 'src/entity/story.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Story])],
})
export class StoryModule {}
