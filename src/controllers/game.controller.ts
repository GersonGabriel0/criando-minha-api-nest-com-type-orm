import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GameModel } from 'src/models/game.model';
import { GameSchema } from 'src/schemas/gamen.schema';

@Controller('/game')
export class GameController {
  constructor(
    @InjectRepository(GameModel) private model: Repository<GameModel>,
  ) {}

  @Post()
  public async create(@Body() body: GameSchema): Promise<GameModel> {
    return this.model.save(body);
  }

  @Get(':id')
  public async getOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<GameModel> {
    const game = await this.model.findOne({ where: { id } });

    if (!game) {
      throw new NotFoundException(`Não achei uma pessoa com o id ${id}`);
    }

    return game;
  }

  @Get()
  public async getAll(): Promise<GameModel[]> {
    return this.model.find();
  }

  @Put(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: GameSchema,
  ): Promise<GameModel> {
    const game = await this.model.findOne({ where: { id } });

    if (!game) {
      throw new NotFoundException(`Não achei uma pessoa com o id ${id}`);
    }

    await this.model.update({ id }, body);

    return this.model.findOne({ where: { id } });
  }

  @Delete(':id')
  public async delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
    const game = await this.model.findOne({ where: { id } });

    if (!game) {
      throw new NotFoundException(`Não achei uma pessoa com o id ${id}`);
    }

    await this.model.delete(id);

    return `A pessoa com id ${id} foi deletada com sucesso`;
  }
}
