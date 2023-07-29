
import { Activity } from 'react-activity-calendar';

export type Time = number;
export type Theme = 'LIGHT' | 'DARK';

export type TimelineObject = {
  index: number,
  event: string,
  icon : string,
  date: string,
  content: null | string,
  contentIcon: null | string | StaticImport,
};

export interface GithubApiResponse {
  total: {
    [year: number]: number;
    [year: string]: number;
  };
  contributions: Array<Activity>;
}