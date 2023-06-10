import React, { forwardRef } from 'react';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

const QASelect = forwardRef((props, ref) => {
  const { items, id = 'select-field', ...rest } = props;

  return (
    <TextField {...rest} select id={id} ref={ref}>
      {items.map((item) => {
        const { label, value } = item;

        return (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        );
      })}
    </TextField>
  );
});

export default QASelect;

