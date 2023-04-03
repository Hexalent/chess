import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ExpressAdapter,
  NestExpressApplication,
} from '@nestjs/platform-express';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';

const logger = new Logger('Application');
const initApp = async () => {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(),
    {
      logger: ['error', 'warn', 'log'],
    },
  );

  const configService = app.get(ConfigService);
  const origin = configService.get<string>('ORIGIN');
  const port = configService.get<number>('SERVER_PORT');
  const host = configService.get<string>('HOST');

  const corsOrigin = {
    origin,
    credentials: true,
  };
  app.enableCors(corsOrigin);
  app.use(cookieParser());
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('Chess API')
    .setDescription(
      'An elegant and powerful API for managing chess games, tournaments, players, and analytics. Experience seamless integration with your favorite chess applications, tools, and platforms.',
    )
    .setVersion('1.0')
    .build();

  const swaggerOptions: SwaggerCustomOptions = {
    swaggerOptions: {
      tagsSorter: 'alpha',
      operationsSorter: 'alpha',
    },
  };
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, swaggerOptions);

  await app.listen(port, host);
  logger.log(`🚀 Application is running on: http://localhost:${port}/api`);
};

initApp();
