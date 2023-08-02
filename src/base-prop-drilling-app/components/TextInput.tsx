import { FC } from 'react';
import TextFieldComponent from '../../components/common/TextFieldComponent';

export interface DateFieldProps {
    title?: string;
    description?: string;
    id: string;
    disabled: boolean;
}

// 👀 ⛔️ PROP DRILLING
const DateField: FC<DateFieldProps> = ({ title, description, id, disabled }) => {

  return (
    <TextFieldComponent id={id} title={title} description={description} disabled={disabled} />
  );
}

export default DateField;