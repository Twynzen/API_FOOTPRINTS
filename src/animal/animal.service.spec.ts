import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AnimalService } from './animal.service';
import { Animal } from './entities/animal.entity';

describe('AnimalService', () => {
  let service: AnimalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AnimalService,
        {
          provide: getRepositoryToken(Animal),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<AnimalService>(AnimalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
