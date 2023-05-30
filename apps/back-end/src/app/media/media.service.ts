import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Media } from './media.entity';
import { S3 } from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import { AWSFileUploadResponse } from '../models/aws-file-upload-response';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MediaService {
  constructor(
    @InjectRepository(Media) private mediaRepo: Repository<Media>,
    private configService: ConfigService
    ) {
    }
  findAll() {
    return this.mediaRepo.find();
  }

  findById(id: number) {
    return this.mediaRepo.findBy({ id });
  }
  create(media: Partial<Media>) {
    const mediaEntity = this.mediaRepo.create(media);
    return this.mediaRepo.save(mediaEntity);
  }
  async uploadFile(
    dataBuffer: Buffer,
    fileName: string,
  ): Promise<Partial<AWSFileUploadResponse>> {
    const s3 = new S3();
    const uuidString = uuidv4();
    const params: S3.PutObjectRequest = {
      Bucket: this.configService.get<string>('AWS_S3_BUCKET'),
      Key: `${uuidString}-${fileName}`,
      Body: dataBuffer,
    };
    const uploadResult: Partial<AWSFileUploadResponse> = await s3
      .upload(params)
      .promise();
    return uploadResult;
  }
}
