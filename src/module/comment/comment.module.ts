import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from 'src/entity/comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Comment])],
})
export class CommentModule {}
