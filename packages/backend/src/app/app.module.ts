import { CacheModule, Module } from '@nestjs/common';
import { cacheModuleConfig, throttlerModuleConfig } from '../shared/lib';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ThrottlerModule.forRootAsync(throttlerModuleConfig),
    CacheModule.registerAsync(cacheModuleConfig),
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  providers: [{ provide: APP_GUARD, useClass: ThrottlerGuard }],
})
export class AppModule {}
