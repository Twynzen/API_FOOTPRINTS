import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; // Importa ValidationPipe

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Elimina las propiedades que no tienen decoradores
    transform: true, // Transforma el payload a la instancia del DTO
  }));
  await app.listen(3000);
}
bootstrap();
