import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	NotFoundException,
	Param,
	Post,
} from "@nestjs/common";
import { CartService } from "./cart.service";
import { CartDto } from "./common/dto/cart.dto";
@Controller("cart")
export class CartController {
	constructor(private readonly cartService: CartService) {}

	@Get("")
	@HttpCode(200)
	async getAll() {
		const carts = await this.cartService.getAll();

		if (!carts) {
			throw new NotFoundException("Корзина не найдена!");
		}

		return carts;
	}

	@Get(":id")
	@HttpCode(200)
	async getById(@Param("id") id: string) {
		const cart = await this.cartService.getById(id);

		if (!cart) {
			throw new NotFoundException("Товар не найден в корзине!");
		}

		return cart;
	}

	@Post("")
	@HttpCode(201)
	async create(@Body() dto: CartDto) {
		await this.cartService.create(dto);

		return {
			message: "Товар добавлен в корзину!",
		};
	}

	@Delete(":id")
	@HttpCode(200)
	async delete(@Param("id") id: string) {
		await this.cartService.delete(id);

		return {
			message: "Товар удален из корзины!",
		};
	}

  @Delete(":id/all")
  @HttpCode(200)
  async deleteAll(@Param("id") id: string) {
    await this.cartService.deleteAll(id);

    return {
      message: "Товары удалены из корзины!"
    }
  }
}
