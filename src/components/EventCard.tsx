import { Event } from '../types';
import { FC } from 'react';
import EventCardComponent from './common/EventCardComponent';

export interface EventCardProps {
    event: Event,
    handleSelectEvent: (id: string) => void,
}

const EventCard: FC<EventCardProps> = ({event, handleSelectEvent}) => {

    return (
        <EventCardComponent event={event} handleSelectEvent={handleSelectEvent} />
    )
}

export default EventCard;