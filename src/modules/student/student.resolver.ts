import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { Student } from './entities/student.entity';
import { StudentWithMarksDto } from './dto/student-with-marks.dto';

@Resolver(() => Student)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Query(() => [StudentWithMarksDto])
  async studentsWithMarks(): Promise<StudentWithMarksDto[]> {
    return this.studentService.findAllWithMarks();
  }

  @Query(() => Student)
  async student(@Args('id', { type: () => Int }) id: number): Promise<Student> {
    return this.studentService.findOne(id);
  }
}
