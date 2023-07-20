import { Card, Typography } from '@mui/material';
import { Event } from '../types';
import { FC } from 'react';
import dayjs, { Dayjs } from 'dayjs';

interface EventCardProps {
    index: number,
    event: Event,
    handleSelectEvent: (index: number) => void,
}

const EventCard: FC<EventCardProps> = ({index, event, handleSelectEvent}) => {
    const {title, date} = event;

    return (
        <Card
            sx={{p: '8px', textAlign: 'left'}}
            onClick={() => handleSelectEvent(index)}
        >
            <Typography variant='h6'>{title}</Typography>
            <Typography variant='body1'>{dayjs(date).format('DD/MM/YYYY')}</Typography>
        </Card>
    )
}

export default EventCard;