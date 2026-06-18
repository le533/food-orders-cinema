import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodOrdersController } from './food-orders.controller';
import { FoodOrdersService } from './food-orders.service';
import { FoodOrder } from './food-order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FoodOrder])],
  controllers: [FoodOrdersController],
  providers: [FoodOrdersService],
})
export class FoodOrdersModule {}
