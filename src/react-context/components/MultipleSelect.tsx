import { FC } from 'react';
import MultipleSelectChipComponent from '../../components/common/MultipleSelectComponent';
import { useUsers } from '../../state-management/tanstack-query/useUsers';
import MenuItem from '../../components/common/MenuItem';
import { useContextDispatch } from '../useDispatch';

export interface MultipleSelectChipProps {
    values: string[];
    id: string;
}

// 👀 ✅ PROP DRILLING - removed `disabled` prop
const MultipleSelectChip: FC<MultipleSelectChipProps> = ({ values, id }) => {
  // 👀 ✅ DATA FETCHED STATE
  const { users } = useUsers();
  const { isDisabled } = useContextDispatch();

  return (
    <MultipleSelectChipComponent id={id} values={values} disabled={isDisabled}>
        {users.map(({name}) => (
            <MenuItem
                key={id}
                name={name}
                values={values}
            />
        ))}
    </MultipleSelectChipComponent>
  );
}

export default MultipleSelectChip;