import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { StudentService } from '../service';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) { }
    
    @Post()
    public async createNewStudent() { }
    
    @Get()
    public async getAllStudent() { }
    
    @Get('/:id')
    public async getStudentById() { }
    
    @Put('/:id')
    public async updateStudentById() { }
    
    @Delete('/:id')
    public async deleteStudentById() { }
}
