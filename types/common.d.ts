
export type Time = number;
export type Theme = 'LIGHT' | 'DARK';

export type TimelineObject = {
  index: number,
  event: string,
  icon : string,
  date: string | number,
  content: null | string,
  contentIcon: null | string | StaticImport,
};