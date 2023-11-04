/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get } from "@nestjs/common";

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
}