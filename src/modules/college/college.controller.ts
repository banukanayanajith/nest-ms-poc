import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { CollegeService } from './college.service';
import { College } from './entities/college.entity';

@Controller('colleges')
export class CollegeController {
  constructor(private readonly collegeService: CollegeService) {}

  @Get()
  findAll(): Promise<College[]> {
    return this.collegeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<College> {
    return this.collegeService.findOne(id);
  }
}
