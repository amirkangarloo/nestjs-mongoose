import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiParam } from '@nestjs/swagger';
import { CreateStudentDto, UpdateStudentDto } from '../dto';
import { StudentService } from '../service';

@Controller({ path: 'student', version: '1' })
export class StudentController {
    constructor(private readonly studentService: StudentService) { }
    
    @Post()
    @ApiOperation({ summary: 'Create new student' })
    public async createNewStudent(@Body() msg: CreateStudentDto) {
        return await this.studentService.createStudent(msg);
     }
    
    @Get()
    @ApiOperation({ summary: 'Get list of all students' })
    public async getAllStudent() { 
        return await this.studentService.getAllStudent();
    }
    
    @Get('/:id')
    @ApiOperation({ summary: 'Get a student by id' })
    @ApiParam({ name: 'id', type: 'string' })
    public async getStudentById(@Param() id: string) {
        return await this.studentService.getStudentById(id);
     }
    
    @Put('/:id')
    @ApiOperation({ summary: 'Update a student by id' })
    @ApiParam({ name: 'id', type: 'string' })
    public async updateStudentById(@Param() id: string, @Body() msg: UpdateStudentDto) {
        return await this.studentService.updateStudentById(id, msg);
     }
    
    @Delete('/:id')
    @ApiParam({ name: 'id', type: 'string' })
    @ApiOperation({ summary: 'Delete a student by id' })
    public async deleteStudentById(@Param() id: string) {
        return await this.studentService.deleteStudentById(id);
     }
}
