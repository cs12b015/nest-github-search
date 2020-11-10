import { User } from './user.model';
import { Repo } from './repo.model';
import { Issue } from './issue.model';
import { ApiProperty } from '@nestjs/swagger';

export class SearchResponse {
  @ApiProperty({ type: Number, example: 1 })
  total_count: number;

  @ApiProperty({ type: Boolean })
  incomplete_results: boolean;

  @ApiProperty({
    type: [Repo],
  })
  items: [Repo | User | Issue];
}
