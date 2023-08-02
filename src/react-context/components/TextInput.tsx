import { FC } from 'react';
import TextFieldComponent from '../../components/common/TextFieldComponent';
import { useContextDispatch } from '../useDispatch';

export interface DateFieldProps {
    title?: string;
    description?: string;
    id: string;
}

// 👀 ✅ PROP DRILLING - removed `disabled` prop
const DateField: FC<DateFieldProps> = ({ title, description, id }) => {
  const { isDisabled } = useContextDispatch();

  return (
    <TextFieldComponent id={id} title={title} description={description} disabled={isDisabled} />
  );
}

export default DateField;