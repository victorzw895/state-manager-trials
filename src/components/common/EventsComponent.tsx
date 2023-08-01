import { FC, ReactNode } from 'react'
import { Stack, Box, Typography } from '@mui/material';
import RenderCounter from '../../util/renderCounter';

interface EventsComponentProps {
    eventsChild: ReactNode;
    createEventChild: ReactNode;
    eventFormChild: ReactNode;
}

const EventsComponent: FC<EventsComponentProps> = ({ eventsChild, createEventChild, eventFormChild }) => {
  return (
    <Stack direction='row' spacing={2} sx={{height: '500px', width: '800px'}}>
        <Stack sx={{flex: '1 1 0px'}}>
            <RenderCounter componentName='Event List' />
            <Typography>Upcoming Events</Typography>
            <Box sx={{overflow: 'scroll'}}> {/* , overflowY: 'hidden', overflowX: 'hidden' */}
                {eventsChild}
            </Box>
            {createEventChild}
        </Stack>
        {eventFormChild}
    </Stack>
  )
}

export default EventsComponent;
