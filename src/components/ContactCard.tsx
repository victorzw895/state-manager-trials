import { User } from '../types';
import { FC } from 'react';
import ContactCardComponent from './common/ContactCardComponent';

export interface ContactCardProps {
    user: User,
}

// 👀 ⛔️ PROP DRILLING
const ContactCard: FC<ContactCardProps> = ({user}) => {

    return (
        <ContactCardComponent user={user} />
    )
}

export default ContactCard;