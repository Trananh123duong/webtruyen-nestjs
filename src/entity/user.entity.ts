import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Rating } from './rating.entity';
import { Favorite } from './favorite.entity';
import { Comment } from './comment.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  avatar: string;

  @OneToMany(() => Rating, (rating) => rating.story)
  ratings: Rating[];

  @OneToMany(() => Favorite, (favorite) => favorite.user)
  favorites: Favorite[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];
}
