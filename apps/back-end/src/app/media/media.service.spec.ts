import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Media } from './media.entity';
import { MediaService } from './media.service';
import { Repository } from 'typeorm';

const fakeMediaRepository = {
  find: jest.fn(),
  findOneBy: jest.fn(),
  findBy: jest.fn(),
  save: jest.fn(),
  remove: jest.fn(),
  create: jest.fn()
};

const MEDIA_REPOSITORY_TOKEN = getRepositoryToken(Media);

describe('MediaService', () => {
  let service: MediaService;
  let mediaRepository: Repository<Media>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MediaService,
        {
          provide: MEDIA_REPOSITORY_TOKEN,
          useValue: fakeMediaRepository
        }
      ],
    }).compile();

    service = module.get<MediaService>(MediaService);
    mediaRepository = module.get<Repository<Media>>(MEDIA_REPOSITORY_TOKEN);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
