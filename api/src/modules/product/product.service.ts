import { Injectable } from "@nestjs/common";
import { ILike, Repository } from "typeorm";
import { ProductsEntity } from "./entities/product.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductDto } from "./common/dto/product.dto";

@Injectable()
export class ProductService {
	constructor(
		@InjectRepository(ProductsEntity)
		private readonly productRepository: Repository<ProductsEntity>,
	) {}

	async getAll(): Promise<ProductsEntity[] | null> {
		return this.productRepository.find();
	}

	async getById(id: string): Promise<ProductsEntity | null> {
		return this.productRepository.findOne({ where: { id } });
	}

	async getByProductName(search: string): Promise<ProductsEntity[] | null> {
		return this.productRepository.find({ 
			where: {
				name: ILike(`%${search}%`)
			}
		});
	}

	async create(product: ProductDto) {
		const newProduct: ProductsEntity = this.productRepository.create(product);
		const saveProduct = this.productRepository.save(newProduct);

		return saveProduct;
	}

	async update(
		product: ProductDto,
		id: string,
	): Promise<ProductsEntity | null> {
		const existing: ProductsEntity | null = await this.getById(id);
		if (!existing) {
			return null;
		}
		await this.productRepository.update(id, product);
		return this.getById(id);
	}

	async delete(id: string): Promise<ProductsEntity | null> {
		const product: ProductsEntity | null = await this.getById(id);
		if (!product) {
			return null;
		}
		await this.productRepository.delete(id);
		return this.getById(id);
	}
}
