import React, { forwardRef } from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';

const QACheckboxGroup = forwardRef((props, ref) => {
  const { items, id = 'checkbox-group-field', label, ...rest } = props;

  return (
    <FormControl>
      <FormLabel id={id}>{label}</FormLabel>
      <FormGroup>
        {items.map((item) => {
          const { label, value, name } = item;

          return (
            <FormControlLabel
              key={value}
              name={name}
              control={<Checkbox ref={ref} {...rest} value={value} />}
              label={label}
            />
          );
        })}
      </FormGroup>
    </FormControl>
  );
});

export default QACheckboxGroup;
