import { Resolver, Query, Args } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { StudentWithMarksDto } from './dto/student.mark.dto';

@Resolver(() => StudentWithMarksDto)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Query(() => [StudentWithMarksDto])
  async studentsWithMarks(): Promise<StudentWithMarksDto[]> {
    return this.studentService.findAllWithMarks();
  }
}
