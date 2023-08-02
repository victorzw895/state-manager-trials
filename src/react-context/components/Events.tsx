import { FC, useState } from 'react'
import EventForm from './EventForm'
import { Button } from '@mui/material';
import EventCard from './EventCard';
import { useEvents } from '../../state-management/tanstack-query/useEvents';
import EventsComponent from '../../components/common/EventsComponent';
import { Event } from '../../types';


const Events: FC = () => {
    // 👀 ✅ DATA FETCHED STATE
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
    <EventsComponent
        eventsChild={
            events.length && events.map((event, i) => (
                <EventCard
                    key={i}
                    event={event}
                    handleSelectEvent={handleSelectEvent}
                />
            ))
        }
        createEventChild={<Button onClick={openForm}>Create Event</Button>}
        eventFormChild={
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
    />
  )
}

export default Events
