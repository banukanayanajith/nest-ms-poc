import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
    Logger,
  } from '@nestjs/common';
  import { GqlExecutionContext } from '@nestjs/graphql';
  import { Observable } from 'rxjs';
  import { tap } from 'rxjs/operators';
  
  @Injectable()
  export class LoggingInterceptor implements NestInterceptor {
    private readonly logger = new Logger('GraphQL');
  
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      const ctx = GqlExecutionContext.create(context);
      const info = ctx.getInfo();
      const operationName = info.fieldName;
      const startTime = Date.now();
  
      this.logger.log(`Incoming GraphQL Request: ${operationName}`);
  
      return next.handle().pipe(
        tap(() => {
          const responseTime = Date.now() - startTime;
          this.logger.log(
            `GraphQL Response: ${operationName} - Time: ${responseTime}ms`,
          );
        }),
      );
    }
  }
  