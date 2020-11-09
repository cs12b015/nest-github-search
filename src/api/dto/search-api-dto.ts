import {
  IsEnum,
  IsString,
  MinLength,
  IsOptional,
  IsNumber,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum SearchTypeEnum {
  USERS = 'users',
  REPOSITORIES = 'repositories',
  ISSUES = 'issues',
}

export class SearchApiDto {
  @ApiProperty({
    type: String,
    description: 'API Search Type',
    enum: [
      SearchTypeEnum.USERS,
      SearchTypeEnum.REPOSITORIES,
      SearchTypeEnum.ISSUES,
    ],
  })
  @IsString()
  @IsEnum(SearchTypeEnum, { each: true })
  readonly searchType: SearchTypeEnum;

  @ApiProperty({ type: String, description: 'Search Text' })
  @IsString()
  @MinLength(3)
  readonly searchText: string;

  @ApiProperty({ type: Number, required: false, description: 'Page Number' })
  @IsNumber()
  @IsOptional()
  readonly page?: number;
}
