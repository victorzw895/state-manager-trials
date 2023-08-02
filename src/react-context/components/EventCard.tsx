import EventCardComponent from '../../components/common/EventCardComponent';
import { Event } from '../../types';
import { FC } from 'react';

export interface EventCardProps {
    event: Event,
    handleSelectEvent: (id: string) => void,
}

// 👀 ⛔️ PROP DRILLING
const EventCard: FC<EventCardProps> = ({event, handleSelectEvent}) => {

    return (
        <EventCardComponent event={event} handleSelectEvent={handleSelectEvent} />
    )
}

export default EventCard;