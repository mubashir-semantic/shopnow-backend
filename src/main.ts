import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';
import { GlobalExceptionFilter } from './common/middleware/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 1. Global Prefix (http://localhost:5000/api)
  app.setGlobalPrefix('api');

  // 2. API Versioning (http://localhost:5000/api/v1)
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  // 3. CORS Enable karein (Frontend se connect karne ke liye)
  app.enableCors();

  // 4. Error Handler Apply karein
  app.useGlobalFilters(new GlobalExceptionFilter());

  const PORT = process.env.PORT || 5000;
  await app.listen(PORT);
  console.log(`ShopNow Backend is running on: http://localhost:${PORT}`);
}
bootstrap();