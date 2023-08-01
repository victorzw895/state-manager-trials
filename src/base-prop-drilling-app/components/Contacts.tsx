import { FC } from 'react'
import ContactCard from './ContactCard';
import { User } from '../../types';
import ContactsComponent from '../../components/common/ContactsComponent';

interface ContactsProps {
    users: User[]
}

// 👀 ⛔️ PROP DRILLING
const Contacts: FC<ContactsProps> = ({ users }) => {

  return (
    <ContactsComponent>
        {
            users.length && users.map((user, i) => (
                <ContactCard
                    key={i}
                    user={user}
                />
            ))
        }
    </ContactsComponent>
  )
}

export default Contacts
