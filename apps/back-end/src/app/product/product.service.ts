import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { AWSFileUploadResponse } from '../models/aws-file-upload-response';
import { MediaService } from '../media/media.service';
import { Media } from '../media/media.entity';
import { File } from '../models/file';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>,
    private mediaService: MediaService,
  ) {}

  findById(id: number) {
    return this.productRepo.find({
      where: {
        id: id,
      },
      relations: {
        media: true,
      },
    });
  }

  findBySubCategoryId(subCategoryId: number): Promise<Product[]> {
    return this.productRepo.find({
      where: {
        subCategoryId: subCategoryId,
      },
      relations: {
        media: true,
      },
    });
  }

  findAll() {
    return this.productRepo.find({
      relations: {
        subCategory: true,
      },
    });
  }

  async createProduct(product: Product, file: File) {
    //upload image to aws
    const uploadedImage: Partial<AWSFileUploadResponse> =
      await this.mediaService.uploadFile(file.buffer, file.originalname);

    // save media in db and get its id

    const productEntity = this.productRepo.create(product);
    const prod = await this.productRepo.save(productEntity);

    const mediaPayload: Partial<Media> = {
      name: product.name,
      description: product.description,
      type: file?.mimetype || '',
      url: uploadedImage.Location,
      createdBy: product.createdBy,
      product: prod,
    };

    await this.mediaService.create(mediaPayload);

    return prod;
  }
}
