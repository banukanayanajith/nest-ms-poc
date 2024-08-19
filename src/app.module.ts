import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { StudentModule } from './modules/student/student.module';
import { CollegeModule } from './modules/college/college.module';
import { SubjectModule } from './modules/subject/subject.module';
import { MarkModule } from './modules/mark/mark.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'myuser',
      password: 'root',
      database: 'students_db',
      autoLoadEntities: true,
      synchronize: false,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    StudentModule,
    CollegeModule,
    SubjectModule,
    MarkModule,
  ],
})
export class AppModule {}