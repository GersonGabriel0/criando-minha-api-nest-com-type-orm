import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameController } from 'src/controllers/game.controller';
import { GameModel } from 'src/models/game.model';

@Module({
  imports: [TypeOrmModule.forFeature([GameModel])],
  controllers: [GameController],
})
export class GameModule {}
