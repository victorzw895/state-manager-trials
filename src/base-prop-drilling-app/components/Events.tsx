import { FC, useState } from 'react'
import EventForm from './EventForm'
import { Event, User } from '../../types';
import { Button } from '@mui/material';
import EventCard from './EventCard';
import EventsComponent from '../../components/common/EventsComponent';

interface EventsProps {
    events: Event[],
    users: User[],
    handleEventUpdate: (value: Event) => void,
}

// 👀 ⛔️ PROP DRILLING
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
                    users={users}
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
