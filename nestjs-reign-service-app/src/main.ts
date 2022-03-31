import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from './config/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(config.default.develoment.port);
}
bootstrap();
