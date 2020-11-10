import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  login: string;

  @ApiProperty({ type: String })
  node_id: string;

  @ApiProperty({ type: String })
  avatar_url: string;

  @ApiProperty({ type: String })
  gravatar_id: string;

  @ApiProperty({ type: String })
  url: string;

  @ApiProperty({ type: String })
  html_url: string;

  @ApiProperty({ type: String })
  followers_url: string;

  @ApiProperty({ type: String })
  following_url: string;

  @ApiProperty({ type: String })
  gists_url: string;

  @ApiProperty({ type: String })
  starred_url: string;

  @ApiProperty({ type: String })
  subscriptions_url: string;

  @ApiProperty({ type: String })
  organizations_url: string;

  @ApiProperty({ type: String })
  repos_url: string;

  @ApiProperty({ type: String })
  events_url: string;

  @ApiProperty({ type: String })
  received_events_url: string;

  @ApiProperty({ type: String })
  type: string;

  @ApiProperty({ type: Boolean })
  site_admin: boolean;
}
