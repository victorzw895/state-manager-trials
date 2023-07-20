import { FC, useState, useEffect } from 'react'
import EventForm from './EventForm'
import { Event as EventType, User as UserType } from '../types';
import { Button, Stack, Typography } from '@mui/material';
import EventCard from './EventCard';

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
    const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

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

    const closeForm = () => {
        setSelectedEvent(null)
        setCreateEvent(false)
    }

  return (
    <Stack direction='row' spacing={2} sx={{height: '500px', width: '250px'}}>
        {
            createEvent || selectedEvent !== null
                ?
                <EventForm
                    event={selectedEvent !== null ? events[selectedEvent] : undefined}
                    users={users}
                    updateEvent={(value: EventType) => updateEvent(value)}
                    updateUser={(value: UserType) => updateUser(value)}
                    handleSubmit={handleSubmit}
                    closeForm={closeForm}
                />
                :
                <Stack sx={{flexGrow: '1'}}>
                    <Typography>Upcoming Events</Typography>
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
                    <Button onClick={() => setCreateEvent(true)}>Create Event</Button>
                </Stack>
        }
    </Stack>
  )
}

export default Events
