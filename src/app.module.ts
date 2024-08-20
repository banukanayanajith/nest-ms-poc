import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { StudentModule } from './modules/student/student.module';
import { CollegeModule } from './modules/college/college.module';
import { SubjectModule } from './modules/subject/subject.module';
import { MarkModule } from './modules/mark/mark.module';
import { LoggingMiddleware } from './common/middlewares/logging.middleware';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';

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
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {  
  configure(consumer: MiddlewareConsumer) {
  consumer
    .apply(LoggingMiddleware)
    .forRoutes({ path: '*', method: RequestMethod.ALL });
}}