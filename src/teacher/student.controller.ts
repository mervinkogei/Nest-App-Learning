/* eslint-disable prettier/prettier */
import { Controller, Get, Put } from '@nestjs/common';

@Controller('teachers')
export class StudentTeacherController {

    @Get('/:teacherId/students')
    getStudents(){
        return 'Get Students by Teacher';
    }

    @Put('/:teacherId/students/:studentId')
    updateStudentTeacher(){
        return 'Get Students by Teacher';
    }
}

