export interface InputType {
  type: string;
  formControl: string;
  placeholder?: string;
  defaultValue?: string;
}

export const formData = [
  {
    type: 'text',
    formControl: 'shiftID',
    placeholder: 'Shift ID',
    defaultValue: '',
  },
  {
    type: 'date',
    formControl: 'shiftDate',
    placeholder: '',
    defaultValue: '',
  },
  {
    type: 'time',
    formControl: 'startTime',
    placeholder: '',
    defaultValue: '',
  },
  { type: 'time', formControl: 'endTime', placeholder: '', defaultValue: '' },
  {
    type: 'text',
    formControl: 'workplace',
    placeholder: 'Workplace',
    defaultValue: '',
  },
  {
    type: 'number',
    formControl: 'wagePerHour',
    placeholder: 'Wage per hour',
    defaultValue: '',
  },
  {
    type: 'text',
    formControl: 'shiftRevenue',
    placeholder: 'Revenue',
    defaultValue: '',
  },
];
