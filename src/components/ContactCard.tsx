import { Card, Typography } from '@mui/material';
import { User } from '../types';
import { FC } from 'react';
import RenderCounter from '../util/renderCounter';
import ContactCardComponent from './common/ContactCardComponent';

export interface ContactCardProps {
    user: User,
}

const ContactCard: FC<ContactCardProps> = ({user}) => {

    return (
        <ContactCardComponent user={user} />
    )
}

export default ContactCard;