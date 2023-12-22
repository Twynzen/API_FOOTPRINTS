import { IsString, IsInt, IsOptional } from 'class-validator';

export class CreateAnimalDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly type: string;

  @IsInt()
  readonly age: number;

  @IsString()
  @IsOptional()
  readonly breed?: string; // Opcional

  // Agrega cualquier otro campo que consideres necesario
}
