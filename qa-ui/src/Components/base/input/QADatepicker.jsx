import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { QATextField } from './QATextField';

const QADatepicker = (props) => {
  const { variant = 'datetime', value, onChange, label } = props;
  let dateComponent;

  if (variant === 'datetime') {
    dateComponent = (
      <DateTimePicker
        label={label}
        value={value}
        onChange={onChange}
        renderInput={(params) => <QATextField {...params} />}
      />
    );
  } else if (variant === 'date') {
    dateComponent = (
      <DesktopDatePicker
        label={label}
        value={value}
        onChange={onChange}
        renderInput={(params) => <QATextField {...params} />}
      />
    );
  } else if (variant === 'time') {
    dateComponent = (
      <TimePicker
        label={label}
        value={value}
        onChange={onChange}
        renderInput={(params) => <QATextField {...params} />}
      />
    );
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {dateComponent}
    </LocalizationProvider>
  );
};

export default QADatepicker;
