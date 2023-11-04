/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Post, Put } from "@nestjs/common";

@Controller('students')
export class StudentController {

    @Get()
    getStudents(){
        return 'All Students';
    }

    @Get('/:studentId')
    getStudentById(){
        return 'Get Student by ID';
    }

    @Post()
    createStudent(){
        return 'CReate  Student';
    }

    @Put('/:studentId')
    updateStudent(){
        return 'Update Student by ID';
    }
}