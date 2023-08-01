import { FC, FormEvent, ReactNode } from 'react';
import { 
    FormLabel,
    FormGroup,
    Stack,
    Button,
    Box,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import RenderCounter from '../../util/renderCounter';
import dayjs from 'dayjs';
import { Event, EventFormType } from '../../types';
import { EventProps } from '../EventForm';

interface EventFormComponentProps extends EventProps {
  children: ReactNode;
}

const EventFormComponent: FC<EventFormComponentProps> = ({event = {} as Event, handleSubmit, closeForm, children}) => {
    const { id, createdBy } = event;

    const handleFormSubmit = (e: FormEvent<EventFormType>) => {
      e.preventDefault()
      const form = e.currentTarget.elements;

      handleSubmit({
        id: id || crypto.randomUUID(),
        title: form.title.value,
        date: dayjs(form.date.value, 'DD/MM/YYYY').toISOString(),
        guests: !form.guests.value ? [] : form.guests.value.split(','),
        description: form.description.value,
        createdBy: createdBy || localStorage.getItem('userId')!
      })
    }

    return (
        <form onSubmit={handleFormSubmit} style={{flex: '1 1 0px'}}>
            <RenderCounter componentName='EventForm' />
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
                    {children}
                    <Button type='submit' variant="contained">Save Event</Button>
                </Stack>
            </FormGroup>
        </form>
    )
}

export default EventFormComponent;