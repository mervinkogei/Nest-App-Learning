/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Post, Put,Param, Body } from "@nestjs/common";

@Controller('students')
export class StudentController {

    @Get()
    getStudents(){
        return 'All Students';
    }

    @Get('/:studentId')
    getStudentById(@Param('studentId')studentId:string){
       return `Get Student by with Id of ${studentId}`;
    }

    @Post()
    createStudent(@Body() body){
        console.log(body)
        return `Create a Student with the following data ${JSON.stringify(body)}`;
    }

    @Put('/:studentId')
    updateStudent(
        @Param('studentId') studentId:string,
        @Body() body
    ){
        return `Update Student with ID ${studentId} with Data of ${JSON.stringify(body)}`;
    }
}