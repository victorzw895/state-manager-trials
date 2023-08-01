import { Card, Typography } from '@mui/material';
import { User } from '../../types';
import { FC } from 'react';
import RenderCounter from '../../util/renderCounter';

interface ContactCardProps {
    user: User,
}

const ContactCard: FC<ContactCardProps> = ({user}) => {
    const {id, name} = user;

    return (
        <Card
            sx={{p: '8px', textAlign: 'left', flexShrink: '0'}}
        >
            <RenderCounter componentName={`Contact-${id}`} />
            <Typography variant='body2'>{name}</Typography>
        </Card>
    )
}

export default ContactCard;