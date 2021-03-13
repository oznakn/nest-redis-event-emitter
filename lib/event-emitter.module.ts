import { DynamicModule, Module } from '@nestjs/common';
import { DiscoveryModule } from '@nestjs/core';
import { NodeRedisPubSub } from 'node-redis-pubsub';
import { EventSubscribersLoader } from './event-subscribers.loader';
import { EventsMetadataAccessor } from './events-metadata.accessor';
import { RedisEventEmitterModuleOptions } from './interfaces';

@Module({})
export class RedisEventEmitterModule {
  static forRoot(options?: RedisEventEmitterModuleOptions): DynamicModule {
    return {
      global: options?.global ?? true,
      module: RedisEventEmitterModule,
      imports: [DiscoveryModule],
      providers: [
        EventSubscribersLoader,
        EventsMetadataAccessor,
        {
          provide: NodeRedisPubSub,
          useValue: new NodeRedisPubSub(options),
        },
      ],
      exports: [NodeRedisPubSub],
    };
  }
}
