import { FC } from 'react';
import { User } from '../../types';
import MultipleSelectChipComponent from '../../components/common/MultipleSelectComponent';
import MenuItem from '../../components/common/MenuItem';

export interface MultipleSelectChipProps {
    values: string[];
    users: User[];
    id: string;
    disabled: boolean;
}

// 👀 PROP DRILLING
const MultipleSelectChip: FC<MultipleSelectChipProps> = ({ values, users, id, disabled }) => {

  return (
    <MultipleSelectChipComponent id={id} values={values} disabled={disabled}>
        {users.map(({name}) => (
            <MenuItem
                name={name}
                values={values}
            />
        ))}
    </MultipleSelectChipComponent>
  );
}

export default MultipleSelectChip;