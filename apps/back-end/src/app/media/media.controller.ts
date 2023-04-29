import {
  Controller,
  Get,
  Param,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MediaService } from './media.service';
import { File } from '../models/file';

@Controller('media')
export class MediaController {
  constructor(private mediaService: MediaService) {}

  @Get()
  findAll() {
    return this.mediaService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') id: string) {
    return this.mediaService.findById(parseInt(id));
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  createMedia(@UploadedFile() file: File) {
    return this.mediaService.uploadFile(file.buffer, file.originalname);
  }
}
