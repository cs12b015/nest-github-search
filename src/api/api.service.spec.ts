import { Test, TestingModule } from '@nestjs/testing';
import { ApiService } from './api.service';
import { HttpModule, CacheModule } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule,
        CacheModule.register({
          store: redisStore,
          url: process.env.REDIS_URL,
        }),
      ],
      providers: [ApiService],
    }).compile();

    service = module.get<ApiService>(ApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return user response', async () => {
    let result: any;
    try {
      result = await service.search('users', 'cs12b015');
    } catch (error) {
      throw error;
    }
    expect(result.items[0].type).toBe('User');
  });

  it('should add cache', async () => {
    try {
      await service.clearCache();
      await service.search('users', 'cs12b015');
    } catch (error) {
      throw error;
    }
    const key = 'users_1_cs12b015';
    const cacheResponse = await service.getCackeByKey(key);
    expect(cacheResponse.items[0].type).toBe('User');
  });

  it('should clear cache', async () => {
    try {
      await service.search('users', 'cs12b015');
      await service.clearCache();
    } catch (error) {
      throw error;
    }
    const key = 'users_1_cs12b015';
    const cacheResponse = await service.getCackeByKey(key);
    expect(cacheResponse).toBe(null);
  });
});
