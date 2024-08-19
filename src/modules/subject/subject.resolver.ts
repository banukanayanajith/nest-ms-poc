import { Resolver, Query, Args } from '@nestjs/graphql';
import { SubjectService } from './subject.service';
import { Subject } from './entities/subject.entity';

@Resolver(() => Subject)
export class SubjectResolver {
  constructor(private readonly subjectService: SubjectService) {}

  @Query(() => [Subject])
  findAllSubjects() {
    return this.subjectService.findAll();
  }

  @Query(() => Subject)
  findSubject(@Args('id') id: number) {
    return this.subjectService.findOne(id);
  }
}
