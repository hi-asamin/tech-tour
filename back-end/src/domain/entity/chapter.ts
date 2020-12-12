import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm'
import { Book } from './book';

@Entity('t_chapter')
export class Chapter {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => Book, book => book.chapters)
  @JoinColumn([{
    name: 'book_id',
    referencedColumnName: 'id'
  }])
  @Column()
  book_id?: number;

  @Column()
  chapter?: string;

  // レコードの作成時間, DATETIME(6)型
  @CreateDateColumn()
  created_at?: Timestamp;

  // レコードの更新時間, DATETIME(6)型
  @UpdateDateColumn()
  updated_at?: Timestamp;

  constructor(chapter: string) {
    this.chapter = chapter;
  }
}