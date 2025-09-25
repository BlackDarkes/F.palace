import { Controller, Get, HttpCode, Param } from "@nestjs/common";
import { UserService } from "./user.service";
import { OrderService } from "../order/order.service";
import { CartService } from "../cart/cart.service";

@Controller("user")
export class UserController {
	constructor(
		private readonly userService: UserService,
		private readonly orderService: OrderService,
		private readonly cartService: CartService,
	) {}

	@Get(":id")
	@HttpCode(200)
	async getMe(@Param("id") id: string) {
		return this.userService.getById(id);
	}

	@Get(":id/orders")
	@HttpCode(200)
	async getOrdersById(@Param("id") id: string) {
		const orders = await this.orderService.getAllById(id);

		if (!orders || orders.length === 0) {
			return {
				message: "Заказов пока что нет!",
			};
		}

		return orders;
	}

	@Get(":id/carts")
  @HttpCode(200)
	async getCartsById(@Param("id") id: string) {
		const carts = await this.cartService.getAllById(id);

		if (!carts || carts.length === 0) {
			return {
				message: "Корзина пуста!",
			};
		}

		return carts;
	}
}
