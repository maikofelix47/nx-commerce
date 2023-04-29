import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RoleService } from './role.service';
import { Role } from './role.entity';
import { CreateRoleDto } from './dtos/create-role.dto';
@Controller('role')
export class RoleController {
    constructor(private roleService: RoleService){

    }

    @Get()
    findAll(): Promise<Role[]>{
        return this.roleService.findAll();
    }

    @Get('/:id')
    findById(@Param('id') id: string): Promise<Role[]>{
        return this.roleService.findById(parseInt(id));
    }

    @Post()
    create(@Body() body: CreateRoleDto){
       const payload = (body as unknown) as Role;
       return this.roleService.create(payload);
    }
}
