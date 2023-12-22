import { IsString, IsInt, IsOptional } from 'class-validator';

export class UpdateAnimalDto {
  @IsString()
  @IsOptional()
  readonly name?: string;

  @IsString()
  @IsOptional()
  readonly type?: string;

  @IsInt()
  @IsOptional()
  readonly age?: number;

  @IsString()
  @IsOptional()
  readonly breed?: string;

  // Agrega cualquier otro campo que consideres necesario
}
