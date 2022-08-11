import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

const logger = new Logger('Main');
const microserviceOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'certificate',
    protoPath: join(__dirname, './proto/certificate.proto'),
    loader: {
      enums: String,
      objects: true,
      arrays: true
    }
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, microserviceOptions);
  app.listen().then(() => {
    logger.log('Microservice is listening...');
  });
}
bootstrap();