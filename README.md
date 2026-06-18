# 🎬 Cinema Management System – Food Orders Module

## Thông tin sinh viên
- **Môn học:** Web Nâng Cao
- **Framework:** NestJS + TypeORM + MySQL
- **Đối tượng phụ trách:** Hóa đơn đồ ăn (food_orders)
- **Trường:** Phenikaa University

## Cấu trúc thư mục
src/
└── food-orders/
    ├── dto/
    │   ├── create-food-order.dto.ts
    │   └── update-food-order.dto.ts
    ├── food-order.entity.ts
    ├── food-orders.controller.ts
    ├── food-orders.module.ts
    └── food-orders.service.ts

## API Endpoints

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| POST | /food-orders | Tạo hóa đơn mới |
| GET | /food-orders | Lấy tất cả hóa đơn |
| GET | /food-orders/:id | Lấy hóa đơn theo ID |
| PUT | /food-orders/:id | Cập nhật hóa đơn |
| DELETE | /food-orders/:id | Xóa hóa đơn |

## Test với Postman

### CREATE
POST http://localhost:3000/food-orders
{"customer_id": 1, "total_amount": 150000}

### READ ALL
GET http://localhost:3000/food-orders

### READ ONE
GET http://localhost:3000/food-orders/1

### UPDATE
PUT http://localhost:3000/food-orders/1
{"total_amount": 200000}

### DELETE
DELETE http://localhost:3000/food-orders/1

## Activity Diagram
- CREATE: Nhập thông tin → Validate → Lưu DB → Trả về 201
- READ: Nhập ID → Kiểm tra tồn tại → Trả về 200
- UPDATE: Nhập ID + data → Kiểm tra tồn tại → Cập nhật DB → Trả về 200
- DELETE: Nhập ID → Kiểm tra tồn tại → Xóa DB → Trả về 200
