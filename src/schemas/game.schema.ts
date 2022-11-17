import { IsString, IsInt, Min, MaxLength, IsEmail } from 'class-validator';

export class GameSchema {
  @IsString()
  @MaxLength(120)
  name: string;

  @IsInt()
  @Min(1)
  idade: number;

  @IsString()
  @MaxLength(120)
  genero: string;

  @IsString()
  @MaxLength(120)
  nickname: string;
}
