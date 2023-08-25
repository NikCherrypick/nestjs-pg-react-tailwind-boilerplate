import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3000;

  const config = new DocumentBuilder()
    .setTitle('Nestjs PG Boilerplate API')
    .setDescription('API description')
    .setBasePath('/swagger')
    .build();

  app.enableCors();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(port);

  console.info(`App started listening on port ${port}`);
}
bootstrap();
