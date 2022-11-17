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
import { LojaModel } from 'src/models/loja.model';
import { LojaSchema } from 'src/schemas/loja.schema';

@Controller('/loja')
export class LojaController {
  constructor(
    @InjectRepository(LojaModel) private model: Repository<LojaModel>,
  ) {}

  @Post()
  public async create(@Body() body: LojaSchema): Promise<LojaModel> {
    return this.model.save(body);
  }

  @Get(':id')
  public async getOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<LojaModel> {
    const loja = await this.model.findOne({ where: { id } });

    if (!loja) {
      throw new NotFoundException(`Não achei uma pessoa com o id ${id}`);
    }

    return loja;
  }

  @Get()
  public async getAll(): Promise<LojaModel[]> {
    return this.model.find();
  }

  @Put(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: LojaSchema,
  ): Promise<LojaModel> {
    const loja = await this.model.findOne({ where: { id } });

    if (!loja) {
      throw new NotFoundException(`Não achei uma pessoa com o id ${id}`);
    }

    await this.model.update({ id }, body);

    return this.model.findOne({ where: { id } });
  }

  @Delete(':id')
  public async delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
    const loja = await this.model.findOne({ where: { id } });

    if (!loja) {
      throw new NotFoundException(`Não achei uma pessoa com o id ${id}`);
    }

    await this.model.delete(id);

    return `A pessoa com id ${id} foi deletada com sucesso`;
  }
}
