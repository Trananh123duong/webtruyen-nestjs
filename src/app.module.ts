import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './module/user/user.module';
import { StoryModule } from './module/story/story.module';
import { RatingModule } from './module/rating/rating.module';
import { GenreModule } from './module/genre/genre.module';
import { FavoriteModule } from './module/favorite/favorite.module';
import { CommentModule } from './module/comment/comment.module';
import { ChapterModule } from './module/chapter/chapter.module';
import { User } from './entity/user.entity';
import { Story } from './entity/story.entity';
import { Rating } from './entity/rating.entity';
import { Genre } from './entity/genre.entity';
import { Favorite } from './entity/favorite.entity';
import { Comment } from './entity/comment.entity';
import { Chapter } from './entity/chapter.entity';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CrawlModule } from './crawler/crawl.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3309,
      username: 'ohayo',
      password: 'ohayo',
      database: 'ohayo_community',
      entities: [User, Story, Rating, Genre, Favorite, Comment, Chapter],
      synchronize: true,
    }),
    UserModule,
    StoryModule,
    RatingModule,
    GenreModule,
    FavoriteModule,
    CommentModule,
    ChapterModule,
    CrawlModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule {}
