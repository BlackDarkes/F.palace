import { IsDecimal, IsNumber, IsString, MinLength } from "class-validator";

export class ProductDto {
  @IsString()
  @MinLength(6)
  name: string;

  @IsString()
  @MinLength(20)
  image: string;

  @IsNumber()
  price: number;

  @IsDecimal()
  stars: number;
}