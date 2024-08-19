import { IsString, IsInt } from 'class-validator';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { SubjectMarksDto } from '../../subject/dtos/subject.mark';

@ObjectType()
export class StudentWithMarksDto {
  @Field(() => Int)
  @IsInt()
  id: number;

  @Field()
  @IsString()
  name: string;

  @Field(() => [SubjectMarksDto])
  subjects: SubjectMarksDto[];
}