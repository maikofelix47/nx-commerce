import { Module } from '@nestjs/common';
import { UserRolePermissionController } from './user-role-permission.controller';
import { UserRolePermissionService } from './user-role-permission.service';

@Module({
  controllers: [UserRolePermissionController],
  providers: [UserRolePermissionService]
})
export class UserRolePermissionModule {}
