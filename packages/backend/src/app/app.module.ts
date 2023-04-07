import { CacheModule, Module } from '@nestjs/common';
import {
  cacheModuleConfig,
  redisModuleConfig,
  throttlerModuleConfig,
} from '../shared/lib';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { RoomModule } from '../common/entities/room';
import { RedisModule } from '@nestjs-modules/ioredis';

@Module({
  imports: [
    ThrottlerModule.forRootAsync(throttlerModuleConfig),
    CacheModule.registerAsync(cacheModuleConfig),
    ConfigModule.forRoot({ isGlobal: true }),
    RoomModule,
    RedisModule.forRootAsync(redisModuleConfig),
  ],
  providers: [{ provide: APP_GUARD, useClass: ThrottlerGuard }],
})
export class AppModule {}
