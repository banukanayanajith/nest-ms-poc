import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { StudentWithMarksDto } from './dto/student.mark.dto';

@Injectable()
export class StudentService {
  private readonly logger = new Logger(StudentService.name);

  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async findAll(): Promise<Student[]> {
    this.logger.log('Fetching all students');
    return this.studentRepository.find();
  }

  findOne(id: number): Promise<Student> {
    return this.studentRepository.findOne({ where : { id }, relations: ['college'] });
  }

  async findAllWithMarks(): Promise<StudentWithMarksDto[]> {
    const students = await this.studentRepository.find({ relations: ['marks', 'marks.subject'] });

    return students.map(student => {
      return {
        id: student.id,
        name: student.name,
        subjects: student.marks.map(mark => ({
          subjectName: mark.subject.name,
          marks: mark.marksObtained,
        })),
      };
    });
  }
}
