import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Student } from '../../student/entities/student.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity('colleges')
export class College {
  @Field(() => Int)
  @PrimaryGeneratedColumn({ name: 'college_id' })
  id: number;

  @Field()
  @Column({ name: 'college_name' })
  name: string;

  @Column()
  state: string;

  @Field(() => [Student])
  @OneToMany(() => Student, student => student.college)
  students: Student[];
  
}
