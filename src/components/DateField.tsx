import { FC } from 'react';
import DateFieldComponent from './common/DateFieldComponent';

export interface DateFieldProps {
    date: string | undefined;
    id: string;
    disabled: boolean;
}

const DateField: FC<DateFieldProps> = ({ date, id, disabled }) => {
  return (
    <DateFieldComponent id={id} date={date} disabled={disabled} />
  );
}

export default DateField;