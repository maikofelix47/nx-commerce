import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

import { TypeOrmModule } from '@nestjs/typeorm';

import { PermissionModule } from './permission/permission.module';
import { RoleModule } from './role/role.module';
import { RolePermissionModule } from './role-permission/role-permission.module';
import { UserRolePermissionModule } from './user-role-permission/user-role-permission.module';
import { MediaModule } from './media/media.module';
import { SubCategoryModule } from './sub-category/sub-category.module';
import { CustomerModule } from './customer/customer.module';
import { CustomerDetailsModule } from './customer-details/customer-details.module';
import { OrderModule } from './order/order.module';
import { OrderDetailsModule } from './order-details/order-details.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

const config = configuration();
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    ProductModule,
    CategoryModule,
    UsersModule,
    TypeOrmModule.forRoot(config.database),
    AuthModule,
    PermissionModule,
    RoleModule,
    RolePermissionModule,
    UserRolePermissionModule,
    MediaModule,
    SubCategoryModule,
    CustomerModule,
    CustomerDetailsModule,
    OrderModule,
    OrderDetailsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
