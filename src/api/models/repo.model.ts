import { ApiProperty } from '@nestjs/swagger';
import { User } from './user.model';

export class Repo {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  node_id: string;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: String })
  full_name: string;

  @ApiProperty({ type: Boolean })
  private: boolean;

  @ApiProperty({ type: User })
  owner: User;

  @ApiProperty({ type: String })
  html_url: string;

  @ApiProperty({ type: String })
  description: string;

  @ApiProperty({ type: Boolean })
  fork: boolean;

  @ApiProperty({ type: String })
  url: string;

  @ApiProperty({ type: String })
  forks_url: string;

  @ApiProperty({ type: String })
  keys_url: string;

  @ApiProperty({ type: String })
  collaborators_url: string;

  @ApiProperty({ type: String })
  teams_url: string;

  @ApiProperty({ type: String })
  hooks_url: string;

  @ApiProperty({ type: String })
  issue_events_url: string;

  @ApiProperty({ type: String })
  events_url: string;

  @ApiProperty({ type: String })
  assignees_url: string;

  @ApiProperty({ type: String })
  branches_url: string;

  @ApiProperty({ type: String })
  tags_url: string;

  @ApiProperty({ type: String })
  blobs_url: string;

  @ApiProperty({ type: String })
  git_tags_url: string;

  @ApiProperty({ type: String })
  git_refs_url: string;

  @ApiProperty({ type: String })
  trees_url: string;

  @ApiProperty({ type: String })
  statuses_url: string;

  @ApiProperty({ type: String })
  languages_url: string;

  @ApiProperty({ type: String })
  stargazers_url: string;

  @ApiProperty({ type: String })
  contributors_url: string;

  @ApiProperty({ type: String })
  subscribers_url: string;

  @ApiProperty({ type: String })
  subscription_url: string;

  @ApiProperty({ type: String })
  commits_url: string;

  @ApiProperty({ type: String })
  git_commits_url: string;

  @ApiProperty({ type: String })
  comments_url: string;

  @ApiProperty({ type: String })
  issue_comment_url: string;

  @ApiProperty({ type: String })
  contents_url: string;

  @ApiProperty({ type: String })
  compare_url: string;

  @ApiProperty({ type: String })
  merges_url: string;

  @ApiProperty({ type: String })
  archive_url: string;

  @ApiProperty({ type: String })
  downloads_url: string;

  @ApiProperty({ type: String })
  issues_url: string;

  @ApiProperty({ type: String })
  pulls_url: string;

  @ApiProperty({ type: String })
  milestones_url: string;

  @ApiProperty({ type: String })
  notifications_url: string;

  @ApiProperty({ type: String })
  labels_url: string;

  @ApiProperty({ type: String })
  releases_url: string;

  @ApiProperty({ type: String })
  deployments_url: string;

  @ApiProperty({ type: String })
  created_at: string;

  @ApiProperty({ type: String })
  updated_at: string;

  @ApiProperty({ type: String })
  pushed_at: string;

  @ApiProperty({ type: String })
  git_url: string;

  @ApiProperty({ type: String })
  ssh_url: string;

  @ApiProperty({ type: String })
  clone_url: string;

  @ApiProperty({ type: String })
  svn_url: string;

  @ApiProperty({ type: String })
  homepage: string;

  @ApiProperty({ type: Number })
  size: number;

  @ApiProperty({ type: Number })
  stargazers_count: number;

  @ApiProperty({ type: Number })
  watchers_count: number;

  @ApiProperty({ type: String })
  language: string;

  @ApiProperty({ type: Boolean })
  has_issues: boolean;

  @ApiProperty({ type: Boolean })
  has_projects: boolean;

  @ApiProperty({ type: Boolean })
  has_downloads: boolean;

  @ApiProperty({ type: Boolean })
  has_wiki: boolean;

  @ApiProperty({ type: Boolean })
  has_pages: boolean;

  @ApiProperty({ type: Number })
  forks_count: number;

  @ApiProperty({ type: String })
  mirror_url: string;

  @ApiProperty({ type: Boolean })
  archived: boolean;

  @ApiProperty({ type: Boolean })
  disabled: boolean;

  @ApiProperty({ type: Number })
  open_issues_count: number;

  @ApiProperty({ type: String })
  license: string;

  @ApiProperty({ type: Number })
  forks: number;

  @ApiProperty({ type: Number })
  open_issues: number;

  @ApiProperty({ type: Number })
  watchers: number;

  @ApiProperty({ type: String })
  default_branch: string;
}
