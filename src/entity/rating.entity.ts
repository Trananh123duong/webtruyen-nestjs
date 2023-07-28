import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Story } from './story.entity';
import { User } from './user.entity';

@Entity()
export class Rating {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rating: number;

  @Column('text', { nullable: true })
  comment: string;

  @ManyToOne(() => Story, (story) => story.ratings)
  @JoinColumn({ name: 'story_id' })
  story: Story;

  @ManyToOne(() => User, (user) => user.ratings)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  created_at: Date;
}
