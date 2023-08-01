import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import { FC } from 'react';
import { DateFieldProps } from '../DateField';

const DateFieldComponent: FC<DateFieldProps> = ({ date, id, disabled }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateField']}>
        <DateField
            label="date"
            key={`date-${id}`}
            name='date'
            variant='standard'
            format='DD/MM/YYYY'
            required
            defaultValue={date ? dayjs(date) : null}
            InputLabelProps={{ shrink: true }}
            disabled={disabled}
          />
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default DateFieldComponent;