import { FC } from 'react';
import { useUsers } from '../state-management/tanstack-query/useUsers';
import MultipleSelectChipComponent from './common/MultipleSelectComponent';
import MenuItem from './common/MenuItem';

export interface MultipleSelectChipProps {
    values: string[];
    id: string;
    disabled: boolean;
}

// 👀 ⛔️ PROP DRILLING
const MultipleSelectChip: FC<MultipleSelectChipProps> = ({ values, id, disabled }) => {
  // 👀 ✅ DATA FETCHED STATE
  const { users } = useUsers();

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