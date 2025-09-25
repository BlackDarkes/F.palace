import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class OrderDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  address: string;
}