import { Resolver, Query, Args } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { Student } from './entities/student.entity';
import { StudentWithMarksDto } from './dto/student.mark.dto';

@Resolver(() => Student)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Query(() => [Student])
  findAllStudents() {
    return this.studentService.findAll();
  }

  @Query(() => Student)
  findStudent(@Args('id') id: number) {
    return this.studentService.findOne(id);
  }

  @Query(() => [StudentWithMarksDto])
  async studentsWithMarks(): Promise<StudentWithMarksDto[]> {
    return this.studentService.findAllWithMarks();
  }
}
