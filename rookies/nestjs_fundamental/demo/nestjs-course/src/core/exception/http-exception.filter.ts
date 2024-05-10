import {
  Catch,
  ArgumentsHost,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { error } from 'console';
import e, { Response } from 'express';

@Catch(HttpException, Error)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger('Global Exception');

  catch(exception: HttpException | Error, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();

    const toThrow = exception instanceof Error ? new HttpException(
      'Internal Server Error',
      HttpStatus.INTERNAL_SERVER_ERROR,
      { cause: exception }
    ) : exception;

    const status = toThrow.getStatus();

    this.logger.error(toThrow);

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      type: exception.constructor.name,
      message: toThrow.getResponse(),
    });
  }
}
