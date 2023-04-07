import { ConfigModule, ConfigService } from '@nestjs/config';

export const throttlerModuleConfig = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => ({
    ttl: configService.get<number>('THROTTLE_TTL', 30),
    limit: configService.get<number>('THROTTLE_LIMIT', 15),
  }),
};

export const cacheModuleConfig = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: () => ({
    isGlobal: true,
  }),
};

export const redisModuleConfig = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => ({
    config: {
      url: configService.get<string>('REDIS_HOST'),
    },
  }),
};
