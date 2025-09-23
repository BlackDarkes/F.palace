import {
	Body,
	Controller,
	Delete,
	Get,
	NotFoundException,
	Param,
	Post,
	Put,
} from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductDto } from "./common/dto/product.dto";

@Controller("product")
export class ProductController {
	constructor(private readonly productService: ProductService) {}

	@Get("")
	async getAll() {
		const products = await this.productService.getAll();

		if (!products || products.length === 0) {
			throw new NotFoundException("Посты не найдены!");
		}

		return this.productService.getAll();
	}

	@Get(":id")
	async getById(@Param("id") id: string) {
		const product = await this.productService.getById(id);

		if (!product) {
			throw new NotFoundException("Пост не найден!");
		}

		return this.productService.getById(id);
	}

	@Post("")
	async create(@Body() product: ProductDto) {
		const newProduct = await this.productService.create(product);

		return {
			message: "Продукт создан!",
			product: newProduct,
		};
	}

	@Put(":id")
	async update(@Param("id") id: string, @Body() product: ProductDto) {
		const updateProduct = await this.productService.update(product, id);

		if (!updateProduct) {
			throw new NotFoundException({ message: "Пост не найден!" });
		}

		return updateProduct;
	}

	@Delete(":id")
	async delete(@Param("id") id: string) {
		const deleteProduct = await this.productService.delete(id);

		if (!deleteProduct) {
			throw new NotFoundException({ message: "Пост не найден!" });
		}

		return {
			message: "Пост удален!",
		};
	}
}
