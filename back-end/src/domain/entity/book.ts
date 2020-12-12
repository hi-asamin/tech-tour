import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm'
import { Chapter } from './chapter';
import { Genrue } from './genre';

@Entity('m_book')
export class Book {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'varchar', length: 255 })
  title?: string;

  @Column({ type: 'varchar', length: 100 })
  author?: string;

  @Column({ nullable: true })
  image?: string;

  @Column()
  genre_id?: number;

  @ManyToOne(() => Genrue, genre => genre.books)
  @JoinColumn([{
    name: 'genre_id',
    referencedColumnName: 'id'
  }])
  genre?: Genrue;

  @OneToMany(() => Chapter, chapter => chapter.book_id, {
    cascade: true,
  })
  chapters?: Chapter[];

  @Column({ type: 'text', nullable: true })
  memo?: string;

  // レコードの作成時間, DATETIME(6)型
  @CreateDateColumn()
  created_at?: Timestamp;

  // レコードの更新時間, DATETIME(6)型
  @UpdateDateColumn()
  updated_at?: Timestamp;


  constructor(title: string, author: string, image: string, genre: Genrue, chapters: Chapter[], memo: string) {
    this.title = title;
    this.author = author;
    this.image = image;
    this.genre = genre;
    this.chapters = chapters;
    this.memo = memo;
  }
}