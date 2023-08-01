import { 
    FormControl,
} from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { FC, ReactNode } from 'react';
import { MultipleSelectChipProps } from '../MultipleSelect';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface MultipleSelectChipComponentProps extends MultipleSelectChipProps {
  children: ReactNode;
}

const MultipleSelectChipComponent: FC<MultipleSelectChipComponentProps> = ({ values, id, disabled, children }) => {
  return (
      <FormControl sx={{ width: '100%' }} variant='standard' >
        <InputLabel id="demo-multiple-chip-label" shrink={true}>Guests</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          label='Guests'
          name='guests'
          id="demo-multiple-chip"
          key={`guests-${id}`}
          multiple
          defaultValue={values}
          disabled={disabled}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.slice(0, 2).map((value) => (
                <Chip key={value} label={value} />
              ))}
              {selected.length > 2 ?
                <Chip key='...' label='...' />
                  :
                <></>
              }
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {children}
        </Select>
      </FormControl>
  );
}

export default MultipleSelectChipComponent;