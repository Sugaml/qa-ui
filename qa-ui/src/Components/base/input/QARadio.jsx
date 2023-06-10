import React from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

const QARadioGroup = (props) => {
  const { items, id = 'radio-group-field', label, ...rest } = props;

  return (
    <FormControl>
      <FormLabel id={`${id}`}>{label}</FormLabel>
      <RadioGroup aria-labelledby={`${id}`} {...rest}>
        {items.map((item) => {
          const { label, value } = item;
          return (
            <FormControlLabel key={value} value={value} control={<Radio />} label={label} />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default QARadioGroup;
