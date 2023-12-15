export const filterBy = [
  { value: '', name: '--select--' },
  { value: 'byName', name: 'By name' },
  { value: 'byDate', name: 'By date' },
  { value: 'byStartTime', name: 'By start time' },
  { value: 'byEndTime', name: 'By end time' },
  { value: 'byWage', name: 'By wage' },
  { value: 'byRevenue', name: 'By revenue' },
];

export const sorterBy = [
  { value: '', name: '--select--' },
  { value: 'asc', name: 'Ascending' },
  { value: 'dsc', name: 'Descending' },
];

export const tableHeadInfo = [
  'ID',
  'Date',
  'Start Time',
  'End Time',
  'Workplace',
  'Wage',
  'Revenue',
];

export interface Filter {
  value: string;
  name: string;
}
