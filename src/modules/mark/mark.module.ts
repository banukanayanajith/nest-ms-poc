import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mark } from './entities/mark.entity';
import { MarkService } from './mark.service';
import { MarkResolver } from './mark.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Mark])],
  providers: [MarkService, MarkResolver],
})
export class MarkModule {}
