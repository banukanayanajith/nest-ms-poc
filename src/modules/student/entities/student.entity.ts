import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { College } from '../../college/entities/college.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Mark } from 'src/modules/mark/entities/mark.entity';

@ObjectType()
@Entity('students')
export class Student {
  @Field(() => Int)
  @PrimaryGeneratedColumn({ name: 'student_id' })
  id: number;

  @Column({name: 'student_name'})
  @Field()
  name: string;

  @Column('decimal', { precision: 5, scale: 2, name: 'average_marks' })
  averageMarks: number;

  @Field(() => College)
  @ManyToOne(() => College, college => college.students)
  @JoinColumn({ name: 'college_id' })
  college: College;

  @Field(() => [Mark])
  @OneToMany(() => Mark, mark => mark.student)
  marks: Mark[];
}
