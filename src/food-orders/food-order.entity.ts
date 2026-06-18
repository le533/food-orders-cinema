import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('food_orders')
export class FoodOrder {
  @PrimaryGeneratedColumn()
  order_id: number;

  @Column({ nullable: true })
  customer_id: number;

  @CreateDateColumn()
  order_date: Date;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  total_amount: number;
}
