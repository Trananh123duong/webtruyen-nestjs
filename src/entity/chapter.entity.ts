import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Story } from './story.entity';

@Entity()
export class Chapter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text')
  content: string;

  @Column()
  status: string;

  @ManyToOne(() => Story, (story) => story.chapters)
  @JoinColumn({ name: 'story_id' })
  story: Story;

  @Column()
  created_at: Date;
}
