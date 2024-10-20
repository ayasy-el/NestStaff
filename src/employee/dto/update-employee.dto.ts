import { Role } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsOptional, IsString } from 'class-validator';

export class UpdateEmployeeDto {
  @ApiProperty({
    example: 'John Doe',
    type: 'string',
    required: false,
  })
  @IsOptional()
  @IsString()
  name?: string;
  @ApiProperty({
    example: 'johndoe@mail.com',
    type: 'string',
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsEmail()
  email?: string;
  @ApiProperty({
    enum: Role,
    required: false,
  })
  @IsOptional()
  @IsEnum(Role, { message: 'Valid role required' })
  role?: Role;
}
