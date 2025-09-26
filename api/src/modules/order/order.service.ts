import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { OrdersEntity } from './entities/orders.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderDto } from './common/dto/order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrdersEntity)
    private readonly orderRepository: Repository<OrdersEntity>
  ) {}

  async getAll(): Promise<OrdersEntity[] | null> {
    return this.orderRepository
      .createQueryBuilder("order")
      .leftJoin("order.user", "user")
      .select([
        "order.id as id",
        "user.name as name",
        "order.order_date as order_date",
        "order.status as status",
        "order.address as address",
        "order.total_amount as total_amount"
      ])
      .getRawMany();
  }

  async getAllById(id: string): Promise<OrdersEntity[] | null> {
    return this.orderRepository
      .createQueryBuilder("order")
      .leftJoin("order.user", "user")
      .select([
        "order.id as id",
        "user.name as name",
        "order.order_date as order_date",
        "order.status as status",
        "order.address as address",
        "order.total_amount as total_amount"
      ])
      .where("user.id = :userId", { userId: id })
      .getRawMany();
  }

  async getById(id: string): Promise<OrdersEntity | null> {
    return this.orderRepository.findOne({ where: { id } })
  }

  async create(id: string, dto: OrderDto) {
    const { address } = dto;
    const newOrder = this.orderRepository.create({
      userId: id,
      orderDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
      address,
      totalAmount: 0,
    });

    return this.orderRepository.save(newOrder);
  }

  async delete(id: string) {
    const searchOrder = this.getById(id);
    if (!searchOrder) {
      return null;
    }
    return this.orderRepository.delete(id);
  }
}
