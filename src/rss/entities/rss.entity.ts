import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Rss {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column()
  language: string;

  @Column()
  link: string;

  @Column()
  copyright: string;

  @Column()
  email: string;
}
