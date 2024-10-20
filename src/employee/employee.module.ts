import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { DatabaseService } from 'src/database/database.service';

@Module({
  imports: [], // Add any other necessary modules here
  controllers: [EmployeeController],
  providers: [EmployeeService, DatabaseService], // Make sure DatabaseService is registered here
})
export class EmployeeModule {}
