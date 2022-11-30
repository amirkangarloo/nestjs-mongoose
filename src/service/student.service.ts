import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStudentDto, UpdateStudentDto } from '../dto';
import { IsStudent } from '../interface';

@Injectable()
export class StudentService {
    constructor(
        @InjectModel('student') private studentModel:Model<IsStudent>
    ){}

    public async createStudent(msg: CreateStudentDto): Promise<IsStudent> {
        try {
            const newStudent = await new this.studentModel(msg);
            return newStudent.save();
        } catch (error) {
            console.log(error);
            throw new InternalServerErrorException('Some thing is failed');
        }
    }

    public async updateStudentById(id: string, msg: UpdateStudentDto): Promise<IsStudent> {
        try {
            const student = await this.studentModel.findByIdAndUpdate(id, msg, {new: true});
            if (!student) {
                throw new NotFoundException(`student by id = ${id} is not exist.`);
            }
            return student
        } catch (error) {
            console.log(error);
            throw new InternalServerErrorException('Some thing is failed');
        }
    }

    public async getAllStudent(): Promise<IsStudent[]> {
        try {
            const students = await this.studentModel.find();
            return students
        } catch (error) {
            console.log(error);
            throw new InternalServerErrorException('Some thing is failed');
        }
    }

    public async getStudentById(id: string): Promise<IsStudent> {
        try {
            const student = await this.studentModel.findById(id);
            if (!student) {
                throw new NotFoundException(`student by id = ${id} is not exist.`);
            }
            return student;
        } catch (error) {
            console.log(error);
            throw new InternalServerErrorException('Some thing is failed');
        }
    }

    public async deleteStudentById(id: string): Promise<string> {
        try {
            const student = await this.studentModel.findByIdAndDelete(id);
            if (!student) {
                throw new NotFoundException(`student by id = ${id} is not exist.`);
            }
            return `Student by ID = ${id} was deleted.`
        } catch (error) {
            console.log(error);
            throw new InternalServerErrorException('Some thing is failed');
        }
    }
}
