import { FC, useState, useEffect } from 'react'
import EventForm from './EventForm'
import { Event, User } from '../../types';
import { Button, Stack, Box, Typography } from '@mui/material';
import EventCard from './EventCard';
import RenderCounter from '../../util/renderCounter';

interface EventsProps {
    events: Event[],
    users: User[],
    handleEventUpdate: (value: Event) => void,
}

const Events: FC<EventsProps> = ({
    events,
    users,
    handleEventUpdate,
}) => {
    const [createEvent, setCreateEvent] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<string | undefined>(undefined);

    const handleSelectEvent = (id: string) => {
        setSelectedEvent(id)
    }

    const handleSubmit = (event: Event): void => {
        handleEventUpdate(event)
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
            <Box sx={{overflow: 'scroll'}}> {/* , overflowY: 'hidden', overflowX: 'hidden' */}
                {
                    events.length && events.map((event, i) => (
                        <EventCard
                            key={i}
                            event={event}
                            handleSelectEvent={handleSelectEvent}
                        />
                    ))
                }
            </Box>
            <Button onClick={openForm}>Create Event</Button>
        </Stack>
        {
            createEvent || selectedEvent
                ?
                <EventForm
                    event={events.find(event => event.id === selectedEvent)}
                    users={users}
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
