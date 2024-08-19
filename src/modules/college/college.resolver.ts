import { Resolver, Query, Args } from '@nestjs/graphql';
import { CollegeService } from './college.service';
import { College } from './entities/college.entity';

@Resolver(() => College)
export class CollegeResolver {
  constructor(private readonly collegeService: CollegeService) {}

  @Query(() => [College])
  findAllColleges() {
    return this.collegeService.findAll();
  }

  @Query(() => College)
  findCollege(@Args('id') id: number) {
    return this.collegeService.findOne(id);
  }
}
