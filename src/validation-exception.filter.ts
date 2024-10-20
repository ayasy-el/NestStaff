import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  BadRequestException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(BadRequestException)
export class ValidationExceptionFilter implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse() as
      | string
      | { message: string[]; error: string };

    let customMessage = 'Validation failed';

    if (typeof exceptionResponse === 'object' && exceptionResponse.message) {
      if (Array.isArray(exceptionResponse.message))
        customMessage = exceptionResponse.message.join(', ');
      else customMessage = exceptionResponse.message;
    }

    response.status(status).json({
      statusCode: status,
      message: customMessage,
    });
  }
}
