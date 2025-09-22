import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { FeedbackModule } from './modules/feedback/feedback.module';
import { CartModule } from './modules/cart/cart.module';
import { ProductModule } from './modules/product/product.module';
import { OrderModule } from './modules/order/order.module';
@Module({
  imports: [AuthModule, UserModule, FeedbackModule, CartModule, ProductModule, OrderModule],
})
export class AppModule {}
