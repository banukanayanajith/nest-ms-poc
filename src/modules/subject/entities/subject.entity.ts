import { Field, ObjectType } from '@nestjs/graphql';
import { Mark } from 'src/modules/mark/entities/mark.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@ObjectType()
@Entity('subjects')
export class Subject {
  @PrimaryGeneratedColumn({ name: 'subject_id' })
  id: number;

  @Column({ name: 'subject_name' })
  @Field()
  name: string;

  @OneToMany(() => Mark, mark => mark.subject)
  marks: Mark[];
}
