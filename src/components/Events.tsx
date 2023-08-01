import { FC, useState, useEffect } from 'react'
import EventForm from './EventForm'
import { Event, User } from '../types';
import { Button, Stack, Box, Typography } from '@mui/material';
import EventCard from './EventCard';
import RenderCounter from '../util/renderCounter';
import { useEvents } from '../state-management/tanstack-query/useEvents';
// import { useEvents } from './state-management/swr/useEvents';


const Events: FC = () => {
    const { events, putEvent: setEvents } = useEvents();
    const [createEvent, setCreateEvent] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<string | undefined>(undefined);

    const handleSelectEvent = (id: string) => {
        setSelectedEvent(id)
    }

    const handleSubmit = async (event: Event): Promise<void> => {
        await setEvents(event)
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
