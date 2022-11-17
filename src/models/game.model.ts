import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GameModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 120 })
  name: string;

  @Column('int')
  idade: number;

  @Column({ length: 120 })
  genero: string;

  @Column({ length: 120 })
  nickname: string;
}
