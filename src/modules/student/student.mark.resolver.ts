import { Resolver, Query, Args } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { StudentWithMarksDto } from './dto/student-with-marks.dto';

@Resolver(() => StudentWithMarksDto)
export class StudentMarkResolver {
  constructor(private readonly studentService: StudentService) {}

  @Query(() => StudentWithMarksDto)
  async studentsWithMarks(): Promise<StudentWithMarksDto[]> {
    return this.studentService.findAllWithMarks();
  }
}
