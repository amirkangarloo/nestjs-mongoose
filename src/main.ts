import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true, forbidNonWhitelisted: true }));
  app.enableVersioning({
    type: VersioningType.URI
  })
  const config = new DocumentBuilder()
    .setTitle('Nestjs and mongoose')
    .setDescription('CRUD with nestjs and mongoDB')
    .setVersion('1.0')
    .addTag('Students')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
  const port = process.env.APP_PORT || 3000;
  await app.listen(port);
}
bootstrap();
