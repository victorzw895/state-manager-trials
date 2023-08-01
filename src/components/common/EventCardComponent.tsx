import { Card, Typography } from '@mui/material';
import { Event } from '../../types';
import { FC } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import RenderCounter from '../../util/renderCounter';
import { EventCardProps } from '../EventCard';


const EventCardComponent: FC<EventCardProps> = ({event, handleSelectEvent}) => {
    const {id, title, date} = event;

    return (
        <Card
            sx={{p: '8px', textAlign: 'left', flexShrink: '0'}}
            onClick={() => handleSelectEvent(id)}
        >
            <RenderCounter componentName={`Event-${id}`} />
            <Typography variant='h6'>{title}</Typography>
            <Typography variant='body1'>{dayjs(date).format('DD/MM/YYYY')}</Typography>
        </Card>
    )
}

export default EventCardComponent;