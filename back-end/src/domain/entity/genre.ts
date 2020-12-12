import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm'
import { Book } from './book';

@Entity('m_genre')
export class Genrue {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  genre?: string;

  @OneToMany(() => Book, book => book.genre_id)
  books?: Book[];

  // レコードの作成時間, DATETIME(6)型
  @CreateDateColumn()
  created_at?: Timestamp;

  // レコードの更新時間, DATETIME(6)型
  @UpdateDateColumn()
  updated_at?: Timestamp;
}