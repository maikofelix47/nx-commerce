import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { Permission } from './permission-entity';
import { CreatePermissionDto } from './dtos/create-permission.dto';

@Controller('permission')
export class PermissionController {
    constructor(private permissionService: PermissionService){

    }

    @Get()
    findAll(): Promise<Permission[]>{
        return this.permissionService.findAll();
    }

    @Get('/:id')
    findById(@Param('id') id: string): Promise<Permission[]>{
       return this.permissionService.findById(parseInt(id));
    }

    @Post()
    create(@Body() body: CreatePermissionDto): Promise<Permission>{
         const payload = (body as unknown) as Permission;
         return this.permissionService.create(payload);
    }

    @Delete('/:id')
    void(@Body() body: CreatePermissionDto, @Param('id') id: string){
       
    }
}
