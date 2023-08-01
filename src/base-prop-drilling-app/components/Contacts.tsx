import { FC } from 'react'
import { Stack, Box, Typography } from '@mui/material';
import RenderCounter from '../../util/renderCounter';
import ContactCard from './ContactCard';
import { User } from '../../types';

interface ContactsProps {
    users: User[]
}

const Contacts: FC<ContactsProps> = ({ users }) => {

  return (
    <Stack direction='row' spacing={2} sx={{height: '500px', width: '100px'}}>
        <Stack sx={{flex: '1 1 0px'}}>
            <RenderCounter componentName='Contact List' />
            <Typography>Contacts</Typography>
            <Box sx={{overflow: 'scroll'}}> {/* , overflowY: 'hidden', overflowX: 'hidden' */}
                {
                    users.length && users.map((user, i) => (
                        <ContactCard
                            key={i}
                            user={user}
                        />
                    ))
                }
            </Box>
        </Stack>
    </Stack>
  )
}

export default Contacts
