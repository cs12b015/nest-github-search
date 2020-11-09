import { Controller, Post, Body, HttpCode, Patch } from '@nestjs/common';
import { SearchApiDto } from './dto/search-api-dto';
import { ApiService } from './api.service';
import { ApiBody } from '@nestjs/swagger';
import { SearchResponse } from './interfaces/search-response.interface';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @ApiBody({ type: SearchApiDto })
  @HttpCode(200)
  @Post('search')
  async getSearchResults(
    @Body() searchApiDto: SearchApiDto,
  ): Promise<SearchResponse> {
    let result;
    try {
      result = await this.apiService.search(
        searchApiDto.searchType,
        searchApiDto.searchText,
        searchApiDto.page,
      );
    } catch (error) {
      throw error;
    }
    return result;
  }

  @HttpCode(204)
  @Patch('clear-cache')
  async clearCache(): Promise<any> {
    try {
      await this.apiService.clearCache();
    } catch (error) {
      throw error;
    }

    return;
  }
}
