import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rating } from 'src/entity/rating.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rating])],
})
export class RatingModule {}
