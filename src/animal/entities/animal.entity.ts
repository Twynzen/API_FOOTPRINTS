import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Animal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  age: number;

  @Column({ nullable: true })
  breed?: string;

  // Agrega cualquier otro campo que consideres necesario
}
