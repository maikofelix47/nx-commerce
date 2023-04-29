import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './role.entity';

@Injectable()
export class RoleService {
    constructor(@InjectRepository(Role) private roleRepository: Repository<Role>){
      
    }

    findAll(){
        return this.roleRepository.find();
    }

    async findById(id: number): Promise<Role[]>{
        const role = this.roleRepository.findBy({id})
        if(!role){
              throw new NotFoundException('Role not found');
        }

        return role;
    }
    async create(role: Role): Promise<Role>{
        const roleEntity = await this.roleRepository.create(role);
        return this.roleRepository.save(roleEntity);
    }
}
