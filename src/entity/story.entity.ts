import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Genre } from './genre.entity';
import { Chapter } from './chapter.entity';
import { Rating } from './rating.entity';
import { Favorite } from './favorite.entity';
import { Comment } from './comment.entity';

@Entity()
export class Story {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  author: string;

  @Column('text')
  description: string;

  @Column({ default: 0 })
  total_reads: number;

  @Column({ default: 0 })
  weekly_reads: number;

  @Column({ default: 0 })
  daily_reads: number;

  @Column({ default: 0 })
  recommendations: number;

  @ManyToMany(() => Genre, (genre) => genre.stories)
  @JoinTable({
    name: 'story_genre',
    joinColumn: {
      name: 'story_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'genre_id',
      referencedColumnName: 'id',
    },
  })
  genres: Genre[];

  @OneToMany(() => Chapter, (chapter) => chapter.story)
  chapters: Chapter[];

  @OneToMany(() => Rating, (rating) => rating.story)
  ratings: Rating[];

  @OneToMany(() => Favorite, (favorite) => favorite.story)
  favorites: Favorite[];

  @OneToMany(() => Comment, (comment) => comment.story)
  comments: Comment[];

  @Column()
  created_at: Date;

  @Column({ nullable: true })
  updated_at: Date;
}
