import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LojaModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 120 })
  name: string;

  @Column({ length: 120 })
  genero: string;

  @Column('int')
  custo: number;
}
