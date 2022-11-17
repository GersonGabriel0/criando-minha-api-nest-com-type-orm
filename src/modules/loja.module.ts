import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LojaController } from 'src/controllers/loja.controller';
import { LojaModel } from 'src/models/loja.model';

@Module({
  imports: [TypeOrmModule.forFeature([LojaModel])],
  controllers: [LojaController],
})
export class LojaModule {}
