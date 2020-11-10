import { User } from './user.model';
import { ApiProperty } from '@nestjs/swagger';

export class Issue {
  @ApiProperty({ type: String })
  url: string;

  @ApiProperty({ type: String })
  repository_url: string;

  @ApiProperty({ type: String })
  labels_url: string;

  @ApiProperty({ type: String })
  comments_url: string;

  @ApiProperty({ type: String })
  events_url: string;

  @ApiProperty({ type: String })
  html_url: string;

  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  node_id: string;

  @ApiProperty({ type: Number })
  number: number;

  @ApiProperty({ type: String })
  title: string;

  @ApiProperty({ type: User })
  user: User;
  labels: any;

  @ApiProperty({ type: String })
  state: string;

  @ApiProperty({ type: Boolean })
  locked: boolean;

  @ApiProperty({ type: User })
  assignee: User;

  @ApiProperty({ type: [User] })
  assignees: [User];

  milestone: any;

  @ApiProperty({ type: Number })
  comments: number;

  @ApiProperty({ type: String })
  created_at: string;

  @ApiProperty({ type: String })
  updated_at: string;

  @ApiProperty({ type: String })
  closed_at: string;

  @ApiProperty({ type: String })
  author_association: string;

  @ApiProperty({ type: String })
  active_lock_reason: string;

  @ApiProperty({ type: String })
  body: string;

  performed_via_github_app: any;
}
