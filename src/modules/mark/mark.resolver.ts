import { Resolver, Query, Args } from '@nestjs/graphql';
import { MarkService } from './mark.service';
import { Mark } from './entities/mark.entity';

@Resolver(() => Mark)
export class MarkResolver {
  constructor(private readonly markService: MarkService) {}

  @Query(() => [Mark])
  findAllMarks() {
    return this.markService.findAll();
  }

  @Query(() => Mark)
  findMark(@Args('id') id: number) {
    return this.markService.findOne(id);
  }
}
