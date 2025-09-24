import {
	IsDecimal,
	IsNotEmpty,
	IsNumber,
	IsString,
	MaxLength,
	MinLength,
} from "class-validator";

export class ProductDto {
	@IsString()
	@IsNotEmpty()
	@MinLength(6)
  @MaxLength(20)
	name: string;

	@IsString()
  @IsNotEmpty()
	@MinLength(20)
	image: string;

	@IsNumber()
  @IsNotEmpty()
	price: number;

	@IsDecimal()
  @IsNotEmpty()
	stars: number;
}
