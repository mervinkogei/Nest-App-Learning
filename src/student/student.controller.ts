/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get } from "@nestjs/common";

@Controller('students')
export class StudentController {

    @Get()
    getStudents(){
        return 'All Students';
    }
}