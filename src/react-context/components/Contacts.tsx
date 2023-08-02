import { FC } from 'react'
import ContactCard from './ContactCard';
import ContactsComponent from '../../components/common/ContactsComponent';
import { useUsers } from '../../state-management/tanstack-query/useUsers';


const Contacts: FC = () => {
    // 👀 ✅ DATA FETCHED STATE
    const { users } = useUsers();

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
