import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeService } from './employee.service';
import { DatabaseService } from 'src/database/database.service'; // Your actual DatabaseService import
import { NotFoundException } from '@nestjs/common';

describe('EmployeeService', () => {
  let service: EmployeeService;

  // Create a mock for DatabaseService
  const mockDatabaseService = {
    // mock methods of DatabaseService that EmployeeService depends on
    findEmployee: jest.fn(),
    createEmployee: jest.fn(),
    updateEmployee: jest.fn(),
    deleteEmployee: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmployeeService,
        { provide: DatabaseService, useValue: mockDatabaseService }, // Mock DatabaseService
      ],
    }).compile();

    service = module.get<EmployeeService>(EmployeeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Add your other tests here, mocking the `DatabaseService` behavior as needed
});
