import { User } from './user.interface';
import { Repo } from './repo.interface';
import { Issue } from './issue.interface';

export interface SearchResponse {
  total_count: number;
  incomplete_results: boolean;
  items: [User | Repo | Issue];
}
