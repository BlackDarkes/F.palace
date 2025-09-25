import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CartEntity } from "./entities/cart.entity";
import { Repository } from "typeorm";
import { CartDto } from "./common/dto/cart.dto";

@Injectable()
export class CartService {
	constructor(
		@InjectRepository(CartEntity)
		private readonly cartRepository: Repository<CartEntity>,
	) {}

	async getAll(): Promise<CartEntity[] | null> {
		return this.cartRepository.find();
	}

	async getAllById(id: string): Promise<CartEntity[] | null> {
		return this.cartRepository
			.createQueryBuilder("cart")
			.leftJoin("cart.user", "user")
			.leftJoin("cart.product", "product")
			.select([
				"cart.id as id",
				"user.name as name",
				"product.name as product",
				"cart.quantity as quantity",
			])
			.where("user.id = :userId", { userId: id })
			.getRawMany();
	}

	async getById(id): Promise<CartEntity | null | undefined> {
		return this.cartRepository
			.createQueryBuilder("cart")
			.leftJoin("cart.user", "user")
			.select([
				"cart.id as id",
				"user.name as name",
				"product.name as product",
				"cart.quantity as quantity",
			])
			.where("user.id = :userId", { userId: id })
			.getRawOne();
	}

	async create(dto: CartDto) {
		const { userId, productId, quantity } = dto;
		const newCart: CartEntity = this.cartRepository.create({
			userId,
			productId,
			quantity,
		});

		return this.cartRepository.save(newCart);
	}

	async delete(id: string) {
		const cart: CartEntity | null | undefined = await this.getById(id);
		if (!cart) {
			return null;
		}
		return this.cartRepository.delete(id);
	}

	async deleteAll(id: string) {
		const carts: CartEntity[] | null = await this.getAllById(id);
		if (!carts || carts.length === 0) {
			return null;
		}
    return this.cartRepository.delete({ userId: id });
	}
}
