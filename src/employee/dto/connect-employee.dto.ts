import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsInt, IsOptional, IsString } from 'class-validator';

export class ConnectEmployeeDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsInt()
  id?: number;
  @ApiProperty({
    example: 'John Doe',
    type: 'string',
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsString()
  name?: string;
  @ApiProperty({
    example: 'johndoe@mail.com',
    type: 'string',
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsString()
  @IsEmail()
  email?: string;
}
