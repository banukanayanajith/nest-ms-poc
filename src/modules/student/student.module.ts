import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentService } from './student.service';
import { StudentResolver } from './student.resolver';
import { Subject } from '../subject/entities/subject.entity';
import { Mark } from '../mark/entities/mark.entity';
import { Student } from './entities/student.entity';
import { StudentController } from './student.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Student, Mark, Subject])],
  providers: [StudentService, StudentResolver],
  controllers: [StudentController]
})
export class StudentModule {}