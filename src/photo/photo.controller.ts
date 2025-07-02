import { Controller, Post, Get, Param, Body, UploadedFile, UseInterceptors, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PhotoService } from './photo.service';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(FileInterceptor('file'))
  create(
    @UploadedFile() file: Express.Multer.File,
    @Body('description') description: string,
    @Body('animalId', ParseIntPipe) animalId: number,
  ) {
    return this.photoService.create(file, description, animalId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.photoService.findOne(id);
  }

  @Get()
  findAll() {
    return this.photoService.findAll();
  }
}
