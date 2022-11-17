import { IsString, IsInt, Min, MaxLength, IsEmail } from 'class-validator';

export class LojaSchema {
  @IsString()
  @MaxLength(120)
  name: string;

  @IsString()
  @MaxLength(120)
  genero: string;

  @IsInt()
  @Min(1)
  custo: number;
}
