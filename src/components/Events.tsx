import { FC, useState, useEffect } from 'react'
import EventForm from './EventForm'
import { Event as EventType, User as UserType } from '../types';
import { Button, Stack, Box, Typography } from '@mui/material';
import EventCard from './EventCard';
import RenderCounter from '../util/renderCounter';

interface EventsProps {
    events: EventType[],
    users: UserType[],
    handleEventUpdate: (value: EventType) => void,
    handleUpdateUser: (value: UserType, id?: string) => void,
}

const Events: FC<EventsProps> = ({
    events,
    users,
    handleEventUpdate,
    handleUpdateUser,
}) => {
    const [createEvent, setCreateEvent] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<string | undefined>(undefined);

    const handleSelectEvent = (id: string) => {
        console.log('id', id)
        setSelectedEvent(id)
    }

    const handleSubmit = (event: EventType): void => {
        handleEventUpdate(event) // data
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
                <Button onClick={openForm}>Create Event</Button>
            </Box>
        </Stack>
        {
            createEvent || selectedEvent
                ?
                <EventForm
                    event={events.find(event => event.id === selectedEvent)}
                    users={users}
                    handleEventUpdate={(value: EventType) => handleEventUpdate(value)}
                    handleUpdateUser={(value: UserType) => handleUpdateUser(value)}
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
