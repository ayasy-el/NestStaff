import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Response, Request } from 'express';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter implements ExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const errorCode = exception.code;
    let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';

    switch (exception.code) {
      case 'P2002':
        statusCode = HttpStatus.CONFLICT;
        message = 'Unique constraint failed on the field: ' + exception.meta.target;
        break;

      case 'P2003':
        statusCode = HttpStatus.BAD_REQUEST;
        message = 'Foreign key constraint failed on the field: ' + exception.meta.field_name;
        break;

      case 'P2025':
        statusCode = HttpStatus.NOT_FOUND;
        message = 'Record not found.';
        break;

      case 'P2016':
        statusCode = HttpStatus.NOT_FOUND;
        message = 'Query returned an empty result set';
        break;

      case 'P2000':
        statusCode = HttpStatus.BAD_REQUEST;
        message = 'Input Data is too long';
        break;

      case 'P2001':
        statusCode = HttpStatus.NOT_FOUND;
        message = 'Record does not exist.';
        break;

      case 'P2004':
        statusCode = HttpStatus.BAD_REQUEST;
        message = 'A constraint failed on the database: ' + exception.meta.cause;
        break;

      case 'P2017':
        statusCode = HttpStatus.BAD_REQUEST;
        message = 'The records for the relation are not connected.';
        break;

      case 'P2018':
        statusCode = HttpStatus.BAD_REQUEST;
        message = 'The required connected records were not found.';
        break;

      case 'P2022':
        statusCode = HttpStatus.BAD_REQUEST;
        message = 'The column was not found in the table.';
        break;

      case 'P2026':
        statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
        message = 'The current database provider doesn’t support a required feature of the query.';
        break;

      default:
        statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
        message = 'An unexpected error occurred.';
        break;
    }

    response.status(statusCode).json({
      statusCode,
      message, 
      errorCode,
      path: request.originalUrl,
    });
  }
}
