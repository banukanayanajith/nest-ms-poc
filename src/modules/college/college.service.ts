import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { College } from './entities/college.entity';

@Injectable()
export class CollegeService {
  constructor(
    @InjectRepository(College)
    private readonly collegeRepository: Repository<College>,
  ) {}

  findAll(): Promise<College[]> {
    return this.collegeRepository.find();
  }
  
  findOne(id: number): Promise<College> {
    return this.collegeRepository.findOne({where: { id }});
  }
}