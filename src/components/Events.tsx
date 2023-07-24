import { FC, useState, useEffect } from 'react'
import EventForm from './EventForm'
import { Event as EventType, User as UserType } from '../types';
import { Button, Stack, Box, Typography } from '@mui/material';
import EventCard from './EventCard';
import RenderCounter from '../util/renderCounter';

interface EventsProps {
    events: EventType[],
    users: UserType[],
    updateEvent: (value: EventType, index?: number) => void,
    updateUser: (value: UserType, index?: number) => void,
}

const Events: FC<EventsProps> = ({
    events,
    users,
    updateEvent,
    updateUser,
}) => {
    const [createEvent, setCreateEvent] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<number | undefined>(undefined);

    const handleSelectEvent = (index: number) => {
        setSelectedEvent(index)
    }

    const handleSubmit = async (event: EventType): Promise<void> => {
        // update/create Event
        // update database
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(event)
        };
        const response = await fetch('/', requestOptions);
        // const data = await response.json();

        updateEvent(event, selectedEvent ?? undefined) // data
        closeForm()
    }

    const openForm = () => {
        setSelectedEvent(undefined)
        setCreateEvent(true)
    }

    const closeForm = () => {
        setSelectedEvent(undefined)
        setCreateEvent(false)
    }

  return (
    <Stack direction='row' spacing={2} sx={{height: '500px', width: '800px'}}>
        <Stack sx={{flex: '1 1 0px'}}>
            <RenderCounter componentName='Event List' />
            <Typography>Upcoming Events</Typography>
            <Box sx={{overflow: 'scroll'}}>
                {
                    events.length && events.map((event, index) => (
                        <EventCard
                            key={index}
                            index={index}
                            event={event}
                            handleSelectEvent={handleSelectEvent}
                        />
                    ))
                }
                <Button onClick={openForm}>Create Event</Button>
            </Box>
        </Stack>
        {
            createEvent || selectedEvent !== undefined
                ?
                <EventForm
                    id={selectedEvent}
                    event={selectedEvent !== undefined ? events[selectedEvent] : selectedEvent}
                    users={users}
                    updateEvent={(value: EventType) => updateEvent(value)}
                    updateUser={(value: UserType) => updateUser(value)}
                    handleSubmit={handleSubmit}
                    closeForm={closeForm}
                />
                :
                <></>
        }
    </Stack>
  )
}

export default Events
