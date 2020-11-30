import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
 } from 'typeorm'
import { TBookRequestBody } from '../interface/book';

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'varchar', length: 255 })
  title?: string;

  @Column({ nullable: true } )
  image?: string;

  @Column({ nullable: true } )
  genre?: string;

  @Column({ nullable: true } )
  chapters?: string;

  @Column({ type: 'text', nullable: true } )
  memo?: string;

  // レコードの作成時間, DATETIME(6)型
  @CreateDateColumn()
  created_at?: Timestamp;

  // レコードの更新時間, DATETIME(6)型
  @UpdateDateColumn()
  updated_at?: Timestamp;

  constructor(book: TBookRequestBody) {
    this.title = book?.title || '';
    this.image = book?.image || '';
    this.genre = String(book?.genre_id) || '';
    this.chapters = book?.chapters.join(',') || '';
    this.memo = book?.memo || '';
  }
}