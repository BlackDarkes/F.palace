import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class CartDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  userId: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  productId: string;

  @IsNumber()
  @IsNotEmpty()
  quantity: number
}