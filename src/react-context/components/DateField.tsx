import { FC } from 'react';
import DateFieldComponent from '../../components/common/DateFieldComponent';
import { useContextDispatch } from '../useDispatch';

export interface DateFieldProps {
    date?: string;
    id: string;
}

// 👀 ✅ PROP DRILLING - removed `disabled` prop
const DateField: FC<DateFieldProps> = ({ date, id }) => {
  const { isDisabled } = useContextDispatch();

  return (
    <DateFieldComponent id={id} date={date} disabled={isDisabled} />
  );
}

export default DateField;