import { Test, TestingModule } from '@nestjs/testing';
import { MediaController } from './media.controller';
import { MediaService } from './media.service';

const mockMediaService = {

};

describe('MediaController', () => {
  let controller: MediaController;
  let mediaService: MediaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: MediaService,
          useValue: mockMediaService
        }
      ],
      controllers: [MediaController],
    }).compile();

    controller = module.get<MediaController>(MediaController);
    mediaService = module.get<MediaService>(MediaService);
  });

  it('media controller should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('media service should be defined', () => {
    expect(mediaService).toBeDefined();
  });
});
