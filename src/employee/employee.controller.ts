import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiQuery,
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
  getSchemaPath,
  ApiExtraModels,
} from '@nestjs/swagger';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeeDto } from './dto/employee.dto';
import { Role } from '@prisma/client';
import { FindAllEmployeesDto } from './dto/get-employee.dto';

@ApiTags('employee')
@Controller('employee')
@ApiExtraModels(EmployeeDto)
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new employee' })
  @ApiBody({ type: CreateEmployeeDto })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  @ApiResponse({ status: 409, description: 'Email or name already exist.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  @ApiResponse({
    status: 201,
    description: 'The employee has been successfully created.',
    schema: {
      properties: {
        message: { example: 'Employee created successfully' },
        data: { $ref: getSchemaPath(EmployeeDto) },
      },
    },
  })
  async create(@Body(ValidationPipe) createEmployeeDto: CreateEmployeeDto) {
    const newEmployee = await this.employeeService.create(createEmployeeDto);
    return {
      message: 'Employee created successfully',
      data: newEmployee,
    };
  }

  @Get()
  @ApiOperation({ summary: 'Get all employees' })
  @ApiQuery({ name: 'role', enum: Role, required: false })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  @ApiResponse({
    status: 200,
    description: 'Return all employees.',
    schema: {
      properties: {
        message: { example: 'Employees retrieved successfully' },
        data: {
          type: 'array',
          items: { $ref: getSchemaPath(EmployeeDto) },
        },
      },
    },
  })
  async findAll(@Query() query?: FindAllEmployeesDto) {
    const employees = await this.employeeService.findAll(query.role);
    return {
      message: 'Employees retrieved successfully',
      data: employees,
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an employee by ID' })
  @ApiParam({ name: 'id', type: String, description: 'ID of the employee' })
  @ApiResponse({ status: 404, description: 'Employee not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  @ApiResponse({
    status: 200,
    description: 'The employee has been successfully retrieved.',
    schema: {
      properties: {
        message: { example: 'Employee retrieved successfully' },
        data: { $ref: getSchemaPath(EmployeeDto) },
      },
    },
  })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const employee = await this.employeeService.findOne(id);
    return {
      message: 'Employee retrieved successfully',
      data: employee,
    };
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an existing employee' })
  @ApiParam({ name: 'id', type: String })
  @ApiBody({ type: UpdateEmployeeDto })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  @ApiResponse({ status: 404, description: 'Employee not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  @ApiResponse({
    status: 200,
    description: 'The employee has been successfully updated.',
    schema: {
      properties: {
        message: { example: 'Employee updated successfully' },
        data: { $ref: getSchemaPath(EmployeeDto) },
      },
    },
  })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateEmployeeDto: UpdateEmployeeDto,
  ) {
    const updatedEmployee = await this.employeeService.update(
      id,
      updateEmployeeDto,
    );
    return {
      message: 'Employee updated successfully',
      data: updatedEmployee,
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an employee' })
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({ status: 404, description: 'Employee not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  @ApiResponse({
    status: 200,
    description: 'The employee has been successfully deleted.',
    schema: {
      properties: {
        message: { example: 'Employee deleted successfully' },
        data: { $ref: getSchemaPath(EmployeeDto) },
      },
    },
  })
  async remove(@Param('id', ParseIntPipe) id: number) {
    const deleted = await this.employeeService.remove(id);
    return {
      message: 'Employee deleted successfully',
      data: deleted,
    };
  }
}
