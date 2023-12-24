import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalModule } from './animal/animal.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [AnimalModule,
    TypeOrmModule.forRoot(),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
