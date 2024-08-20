import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class SubjectMarksDto {
  @Field()
  subjectName: string;

  @Field(() => Int)
  marks: number;
}

@ObjectType()
export class StudentWithMarksDto {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => [SubjectMarksDto])
  subjects: SubjectMarksDto[];
}
