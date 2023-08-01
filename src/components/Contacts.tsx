import { FC } from 'react'
import { Stack, Box, Typography } from '@mui/material';
import RenderCounter from '../util/renderCounter';
import { useUsers } from '../state-management/tanstack-query/useUsers';
import ContactCard from './ContactCard';
import ContactsComponent from './common/ContactsComponent';


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
