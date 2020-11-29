import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
 } from 'typeorm'

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn()
  readonly id?: number;

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
}