import { IsString, IsInt, Min, Max } from 'class-validator';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SubjectMarksDto {
  @Field()
  @IsString()
  subjectName: string;

  @Field(() => Int)
  @IsInt()
  @Min(0)
  @Max(100)
  marks: number;
}