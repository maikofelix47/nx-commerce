import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerDetailsController } from './customer-details.controller';
import { CustomerDetails } from './customer-details.entity';
import { CustomerDetailsService } from './customer-details.service';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerDetails])],
  controllers: [CustomerDetailsController],
  providers: [CustomerDetailsService]
})
export class CustomerDetailsModule {}
