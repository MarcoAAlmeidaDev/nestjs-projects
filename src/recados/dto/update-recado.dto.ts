import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class UpdateRecadoDto {
  @IsString({
    message: "O campo 'texto' deve ser do tipo string",
  })
  @IsNotEmpty({
    message: "O campo 'texto' não pode estar vazio",
  })
  @MinLength(5, {
    message: "O campo 'texto' deve ter no mínimo 5 caracteres",
  })
  @IsOptional()
  readonly texto?: string;

  @IsString({
    message: "O campo 'de' deve ser do tipo string",
  })
  @IsNotEmpty({
    message: "O campo 'de' não pode estar vazio",
  })
  @MinLength(2, {
    message: "O campo 'de' deve ter no mínimo 2 caracteres",
  })
  readonly de?: string;

  @IsString({
    message: "O campo 'para' deve ser do tipo string",
  })
  @IsNotEmpty({
    message: "O campo 'para' não pode estar vazio",
  })
  @MinLength(2, {
    message: "O campo 'para' deve ter no mínimo 2 caracteres",
  })
  @IsOptional()
  readonly para?: string;

  @IsOptional()
  @IsBoolean({
    message: "O campo 'lido' deve ser do tipo boolean",
  })
  readonly lido?: boolean;
}
