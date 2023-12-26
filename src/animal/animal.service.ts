import { Injectable, NotFoundException } from '@nestjs/common';
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
    const animal = await this.animalRepository.findOneBy({ id });
    if (!animal) {
      throw new NotFoundException(`Animal with ID ${id} not found`);
    }
    return animal;
  }

  async update(id: number, updateAnimalDto: UpdateAnimalDto): Promise<Animal> {
    const updateResult = await this.animalRepository.update(id, updateAnimalDto);
    if (updateResult.affected === 0) {
      throw new NotFoundException(`Animal with ID ${id} not found`);
    }
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const deleteResult = await this.animalRepository.delete(id);
    if (deleteResult.affected === 0) {
      throw new NotFoundException(`Animal with ID ${id} not found`);
    }
  }
}
