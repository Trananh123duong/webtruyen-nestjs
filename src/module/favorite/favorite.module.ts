import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Favorite } from 'src/entity/favorite.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Favorite])],
})
export class FavoriteModule {}
