import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FoodOrder } from './food-order.entity';
import { CreateFoodOrderDto } from './dto/create-food-order.dto';
import { UpdateFoodOrderDto } from './dto/update-food-order.dto';

@Injectable()
export class FoodOrdersService {
  constructor(
    @InjectRepository(FoodOrder)
    private foodOrderRepository: Repository<FoodOrder>,
  ) {}

  async create(dto: CreateFoodOrderDto): Promise<FoodOrder> {
    const order = this.foodOrderRepository.create(dto);
    return await this.foodOrderRepository.save(order);
  }

  async findAll(): Promise<FoodOrder[]> {
    return await this.foodOrderRepository.find();
  }

  async findOne(id: number): Promise<FoodOrder> {
    const order = await this.foodOrderRepository.findOne({ where: { order_id: id } });
    if (!order) throw new NotFoundException(`Hóa đơn #${id} không tồn tại`);
    return order;
  }

  async update(id: number, dto: UpdateFoodOrderDto): Promise<FoodOrder> {
    const order = await this.findOne(id);
    Object.assign(order, dto);
    return await this.foodOrderRepository.save(order);
  }

  async remove(id: number): Promise<{ message: string }> {
    const order = await this.findOne(id);
    await this.foodOrderRepository.remove(order);
    return { message: `Đã xóa hóa đơn #${id} thành công` };
  }
}
