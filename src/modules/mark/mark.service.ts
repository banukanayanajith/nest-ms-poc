import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mark } from './entities/mark.entity';

@Injectable()
export class MarkService {
  constructor(
    @InjectRepository(Mark)
    private markRepository: Repository<Mark>,
  ) {}

  findAll(): Promise<Mark[]> {
    return this.markRepository.find({ relations: ['student', 'subject'] });
  }

  findOne(id: number): Promise<Mark> {
    return this.markRepository.findOne({ where : {id}, relations: ['student', 'subject'] });
  }
}
