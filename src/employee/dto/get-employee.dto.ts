import { IsIn, IsOptional } from 'class-validator';
import { Role } from '@prisma/client';

export class FindAllEmployeesDto {
  @IsOptional()
  @IsIn([...Object.values(Role), ''], {
    message: 'Role is invalid',
  })
  role?: Role;
}
