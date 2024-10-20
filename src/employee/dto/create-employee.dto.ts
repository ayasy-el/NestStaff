import { Role } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateEmployeeDto {
  @ApiProperty({
    example: 'John Doe',
    type: 'string',
  })
  @IsNotEmpty()
  @IsString()
  name: string;
  @ApiProperty({
    example: 'johndoe@mail.com',
    type: 'string',
  })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;
  @ApiProperty({
    enum: Role,
  })
  @IsNotEmpty()
  @IsEnum(Role, { message: 'Valid role required' })
  role: Role;
}
