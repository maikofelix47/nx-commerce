import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Permission } from './permission-entity';

@Injectable()
export class PermissionService {
    constructor(@InjectRepository(Permission) private permissonRepo: Repository<Permission>){

    }

    findAll(): Promise<Permission[]>{
        return this.permissonRepo.find();
    }

    async findById(id: number): Promise<Permission[]>{
        const permission = await this.permissonRepo.findBy({id});
        if(permission.length === 0){
            throw new NotFoundException('No such permission found');
        }

        return permission;

        
    }
    create(permission: Permission): Promise<Permission>{
        const permissionEntity = this.permissonRepo.create(permission);
        return this.permissonRepo.save(permissionEntity);
    }

    void(id: number, body: {voidReason: string}){
    }
}
