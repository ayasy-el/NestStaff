import { Role } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class EmployeeDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  id: number;
  @ApiProperty({
    example: 'John Doe',
    type: 'string',
  })
  name: string;
  @ApiProperty({
    example: 'johndoe@mail.com',
    type: 'string',
  })
  email: string;
  @ApiProperty({
    enum: Role,
  })
  role: Role;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  createdAt: Date;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  updatedAt: Date;
}
