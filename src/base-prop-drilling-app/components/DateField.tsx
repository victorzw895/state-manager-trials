import { FC } from 'react';
import DateFieldComponent from '../../components/common/DateFieldComponent';

export interface DateFieldProps {
    date: string | undefined;
    id: string;
    disabled: boolean;
}

// 👀 ⛔️ PROP DRILLING
const DateField: FC<DateFieldProps> = ({ date, id, disabled }) => {
  return (
    <DateFieldComponent id={id} date={date} disabled={disabled} />
  );
}

export default DateField;