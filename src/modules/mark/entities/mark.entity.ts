import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Student } from '../../student/entities/student.entity';
import { Subject } from '../../subject/entities/subject.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity('marks')
export class Mark {
  @PrimaryGeneratedColumn({ name: 'mark_id' })
  id: number;

  @ManyToOne(() => Student, student => student.marks)
  @JoinColumn({ name: 'student_id' })
  student: Student;

  @ManyToOne(() => Subject)
  @JoinColumn({ name: 'subject_id' })
  subject: Subject;

  @Column({name: 'marks_obtained'})
  @Field()
  marksObtained: number;
}
