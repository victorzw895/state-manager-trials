import { User } from '../../types';
import { FC } from 'react';
import ContactCardComponent from '../../components/common/ContactCardComponent';

interface ContactCardProps {
    user: User,
}

// 👀 ⛔️ PROP DRILLING
const ContactCard: FC<ContactCardProps> = ({user}) => {

    return (
        <ContactCardComponent user={user} />
    )
}

export default ContactCard;