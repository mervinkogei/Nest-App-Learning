/* eslint-disable prettier/prettier */
import { Controller, Get,} from '@nestjs/common';

@Controller('teachers')
export class TeacherController {

    @Get()
    getTeacher(){
        return 'All Teachers';
    }

    @Get('/:teacherId')
    getTeacherById(){
        return 'Get Teacher by ID';
    }
   
}

