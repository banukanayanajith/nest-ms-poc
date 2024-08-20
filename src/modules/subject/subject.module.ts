import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from './entities/subject.entity';
import { SubjectService } from './subject.service';
import { SubjectResolver } from './subject.resolver';
import { SubjectMarksDto } from './dtos/subject.mark';

@Module({
  imports: [TypeOrmModule.forFeature([Subject, SubjectMarksDto])],
  providers: [SubjectService, SubjectResolver],
})
export class SubjectModule {}
