/* eslint-disable prettier/prettier */
import { Controller, Get, Put } from '@nestjs/common';

@Controller('/:teacherId/students')
export class StudentTeacherController {

    @Get()
    getStudents(){
        return 'Get Students by Teacher';
    }

    @Put('/:studentId')
    updateStudentTeacher(){
        return 'Get Students by Teacher';
    }
}

