import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';
import { Photo } from './entities/photo.entity';
import { Animal } from '../animal/entities/animal.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Photo, Animal]),
    MulterModule.register({ dest: './uploads' }),
  ],
  providers: [PhotoService],
  controllers: [PhotoController],
})
export class PhotoModule {}
