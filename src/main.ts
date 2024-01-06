import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //데이터 검증용 class-validator 적용
  app.useGlobalPipes(new ValidationPipe({
    whitelist : true,
    forbidNonWhitelisted : true,
    transform :true
  }))
  await app.listen(3000);
}
bootstrap();
