import {
  Injectable,
  HttpService,
  Inject,
  CACHE_MANAGER,
  HttpException,
} from '@nestjs/common';
import { Cache } from 'cache-manager';
import { SearchResponse } from './models/search-response.model';
import { CONSTANTS } from './../constants';

@Injectable()
export class ApiService {
  constructor(
    private http: HttpService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async search(searchType, searchText, page = 1): Promise<SearchResponse> {
    const key = `${searchType}_${page}_${searchText}`;
    let cacheResponse;
    try {
      cacheResponse = await this.cacheManager.get(key);
    } catch (error) {
      console.log(error);
      throw new HttpException(
        `Error While getting cache from redis key(${key})`,
        500,
      );
    }
    if (cacheResponse !== null) {
      return cacheResponse;
    }

    const url = `https://api.github.com/search/${searchType}?q=${searchText}&page=${page}`;
    let data;

    try {
      ({ data } = await this.http.get(url).toPromise());
    } catch (error) {
      console.log(error);
      throw new HttpException(
        `Error While getting Data from github url(${url})`,
        500,
      );
    }

    try {
      await this.cacheManager.set(key, data, {
        ttl: CONSTANTS.REDIS_CACHE_TTL,
      });
    } catch (error) {
      console.log(error);
      throw new HttpException(
        `Error While setting cache to redis key(${key})`,
        500,
      );
    }

    return data;
  }

  async clearCache() {
    await this.cacheManager.reset();
    return;
  }

  getCackeByKey(key) {
    return this.cacheManager.get(key);
  }
}
