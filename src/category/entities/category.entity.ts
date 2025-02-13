import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Length } from 'class-validator';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Length(3, 20, {
    message: 'Category name must be between 3 and 20 characters',
  })
  name: string;
}
