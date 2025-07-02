import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './entities/photo.entity';
import { Animal } from '../animal/entities/animal.entity';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private photoRepository: Repository<Photo>,
    @InjectRepository(Animal)
    private animalRepository: Repository<Animal>,
  ) {}

  async create(file: Express.Multer.File, description: string, animalId: number): Promise<Photo> {
    const animal = await this.animalRepository.findOneBy({ id: animalId });
    if (!animal) {
      throw new NotFoundException(`Animal with ID ${animalId} not found`);
    }
    const photo = this.photoRepository.create({
      path: file.path,
      description,
      animal,
    });
    return this.photoRepository.save(photo);
  }

  async findAll(): Promise<Photo[]> {
    return this.photoRepository.find();
  }

  async findOne(id: number): Promise<Photo> {
    const photo = await this.photoRepository.findOneBy({ id });
    if (!photo) {
      throw new NotFoundException(`Photo with ID ${id} not found`);
    }
    return photo;
  }
}
