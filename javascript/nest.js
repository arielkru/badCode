import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { LoggingInterceptor } from 'libs/LoggingInterceptor';
import { HttpExceptionFilter } from 'libs/HttpExceptionFilter';

import { Config } from 'src/Config';
import { AppModule } from 'src/AppModule';
import helmet from 'helmet';
import compression from 'compression';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(helmet());
  app.use(compression());
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());
  setupSwagger(app);
  await app.listen(1000);
}

bootstrap();