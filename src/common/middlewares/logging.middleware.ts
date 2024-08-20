import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  private readonly logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction): void {
    const { method, originalUrl } = req;
    const startTime = Date.now();

    this.logger.log(`Incoming Request: ${method} ${originalUrl}`);

    res.on('finish', () => {
      const { statusCode } = res;
      const responseTime = Date.now() - startTime;
      this.logger.log(
        `Response: ${method} ${originalUrl} - Status: ${statusCode} - Time: ${responseTime}ms`,
      );
    });

    next();
  }
}
