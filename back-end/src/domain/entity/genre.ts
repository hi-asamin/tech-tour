import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm'
import { Book } from './book';

@Entity('m_genre')
export class Genre {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  genre?: string;

  @OneToMany(() => Book, book => book.genre, {
    cascade: true,
  })
  books?: Book[];

  // レコードの作成時間, DATETIME(6)型
  @CreateDateColumn()
  created_at?: Timestamp;

  // レコードの更新時間, DATETIME(6)型
  @UpdateDateColumn()
  updated_at?: Timestamp;
}