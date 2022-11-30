import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateStudentDto, UpdateStudentDto } from '../dto';
import { StudentService } from '../service';

@Controller({ path: 'student', version: '1' })
export class StudentController {
    constructor(private readonly studentService: StudentService) { }
    
    @Post()
    public async createNewStudent(@Body() msg: CreateStudentDto) {
        return await this.studentService.createStudent(msg);
     }
    
    @Get()
    public async getAllStudent() { 
        return await this.studentService.getAllStudent();
    }
    
    @Get('/:id')
    public async getStudentById(@Param() id: string) {
        return await this.studentService.getStudentById(id);
     }
    
    @Put('/:id')
    public async updateStudentById(@Param() id: string, @Body() msg: UpdateStudentDto) {
        return await this.studentService.updateStudentById(id, msg);
     }
    
    @Delete('/:id')
    public async deleteStudentById(@Param() id: string) {
        return await this.studentService.deleteStudentById(id);
     }
}
