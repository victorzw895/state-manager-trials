import { FC, useState, FormEvent } from 'react';
import { 
    FormLabel,
    FormControl,
    FormGroup,
    TextField,
    Stack,
    Button,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import RenderCounter from '../util/renderCounter';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import { Event, User } from '../types';

const BasicDateField = ({ date }: { date: string | undefined }) => {
  const [value, setValue] = useState<Dayjs | null>(date ? dayjs(date) : null);

  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateField']}>
        <DateField
            label="date"
            name='date'
            variant='standard'
            format='DD/MM/YYYY'
            required
            value={value}
            onChange={(newValue: Dayjs | null) => setValue(newValue)}
            InputLabelProps={{ shrink: true }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';

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

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const MultipleSelectChip = ({ values }: { values: string[]}) => {
  const theme = useTheme();
  const [personName, setPersonName] = useState<string[]>(values);
//   const [personName, setPersonName] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
      <FormControl sx={{ width: '100%' }} variant='standard' >
        <InputLabel id="demo-multiple-chip-label" shrink={true}>Guests</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          label='Guests'
          name='guests'
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
  );
}

interface EventProps {
    event?: Event,
    users: User[],
    updateEvent: (value: Event) => void,
    updateUser: (value: User) => void,
    handleSubmit: (event: Event) => Promise<void>,
    closeForm: () => void,
}

interface FormInputs extends HTMLFormControlsCollection   {
  title: HTMLInputElement;
  date: HTMLInputElement;
  guests: HTMLInputElement;
  description: HTMLInputElement;
}
 
interface EventFormType extends HTMLFormElement {
  readonly elements: FormInputs;
}

const Event: FC<EventProps> = ({event = {} as Event, users, updateEvent, handleSubmit, closeForm}) => {
    const { title, date, guests = [], description } = event;

    const handleFormSubmit = async (e: FormEvent<EventFormType>) => {
      e.preventDefault()
      const form = e.currentTarget.elements;

      await handleSubmit({
        title: form.title.value,
        date: dayjs(form.date.value, 'DD/MM/YYYY').toISOString(),
        guests: !form.guests.value ? [] : form.guests.value.split(','),
        description: form.description.value,
      })
    }

    return (
        <form onSubmit={handleFormSubmit} style={{flexGrow: '1'}}>
            <RenderCounter componentName='Event' />
            <FormGroup>
                <Stack direction='column' spacing={2}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Button onClick={closeForm}><ArrowBackIosIcon /></Button>
                      <FormLabel sx={{flexGrow: '1'}}>Event</FormLabel>
                    </Box>
                    <TextField
                        label="title"
                        id='title'
                        name='title'
                        variant="standard"
                        InputLabelProps={{ shrink: true }}
                        defaultValue={title}
                        required
                    />
                    <BasicDateField date={date} />
                    <MultipleSelectChip values={guests} />
                    <TextField
                        label="description"
                        name='description'
                        variant="standard"
                        InputLabelProps={{ shrink: true }}
                        multiline
                        rows={4}
                        defaultValue={description}
                    />  
                    <Button type='submit' variant="contained">Save Event</Button>
                </Stack>
            </FormGroup>
        </form>
    )
}

export default Event;