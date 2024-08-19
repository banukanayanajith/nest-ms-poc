import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { College } from './entities/college.entity';
import { CollegeService } from './college.service';
import { CollegeResolver } from './college.resolver';
import { CollegeController } from './college.controller';

@Module({
  imports: [TypeOrmModule.forFeature([College])],
  controllers: [CollegeController],
  providers: [CollegeService, CollegeResolver],
})
export class CollegeModule {}
