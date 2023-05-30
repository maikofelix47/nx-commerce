import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Media } from './media.entity';
import { MediaService } from './media.service';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';


const fakeMediaRepository = {
  find: jest.fn(),
  findOneBy: jest.fn(),
  findBy: jest.fn(),
  save: jest.fn(),
  remove: jest.fn(),
  create: jest.fn()
};
const mockConfigService = {

};

const MEDIA_REPOSITORY_TOKEN = getRepositoryToken(Media);

describe('MediaService', () => {
  let service: MediaService;
  let mediaRepository: Repository<Media>;
  let configService: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MediaService,
        {
          provide: MEDIA_REPOSITORY_TOKEN,
          useValue: fakeMediaRepository
        },
        {
          provide: ConfigService,
          useValue: mockConfigService
        }
      ],
    }).compile();

    service = module.get<MediaService>(MediaService);
    mediaRepository = module.get<Repository<Media>>(MEDIA_REPOSITORY_TOKEN);
    configService = module.get<ConfigService>(ConfigService);
  });

  it('media service should be defined', () => {
    expect(service).toBeDefined();
  });
  it('media repository should be defined', () => {
    expect(mediaRepository).toBeDefined();
  });
  it('config service be defined', () => {
    expect(configService).toBeDefined();
  });
});
