import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDto } from './common/dto/order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get("")
  @HttpCode(200)
  async getAll() {
    const orders = await this.orderService.getAll();

    if (!orders || orders.length === 0) {
      throw new NotFoundException("Заказов нет!")
    }

    return orders;
  }

  @Get(":id")
  @HttpCode(200) 
  async getById(@Param("id") id: string) {
    const order = this.orderService.getById(id);

    if (!order) {
      throw new NotFoundException("Заказов нет!")
    }

    return order;    
  }

  @Delete(":id")
  @HttpCode(200)
  async delete(@Param() id: string) {
    await this.orderService.delete(id);

    return {
      message: "Заказ отменён!",
    }
  }
}
