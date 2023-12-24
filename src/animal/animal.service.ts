import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Animal } from './entities/animal.entity';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(Animal)
    private animalRepository: Repository<Animal>,
  ) {}

  async create(createAnimalDto: CreateAnimalDto): Promise<Animal> {
    const newAnimal = this.animalRepository.create(createAnimalDto);
    return this.animalRepository.save(newAnimal);
  }

  async findAll(): Promise<Animal[]> {
    return this.animalRepository.find();
  }

  async findOne(id: number): Promise<Animal> {
    return this.animalRepository.findOneBy({ id });
  }
  
  async update(id: number, updateAnimalDto: UpdateAnimalDto): Promise<Animal> {
    await this.animalRepository.update(id, updateAnimalDto);
    return this.animalRepository.findOneBy({ id });
  }
  

  async remove(id: number): Promise<void> {
    await this.animalRepository.delete(id);
  }
}
