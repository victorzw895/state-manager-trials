import { FC, ReactNode } from 'react'
import { Stack, Box, Typography } from '@mui/material';
import RenderCounter from '../../util/renderCounter';

interface ContactsComponent {
    children: ReactNode
}

const ContactsComponent: FC<ContactsComponent> = ({children}) => {
  return (
    <Stack direction='row' spacing={2} sx={{height: '500px', width: '100px'}}>
        <Stack sx={{flex: '1 1 0px'}}>
            <RenderCounter componentName='Contact List' />
            <Typography>Contacts</Typography>
            <Box sx={{overflow: 'scroll'}}> {/* , overflowY: 'hidden', overflowX: 'hidden' */}
                {children}
            </Box>
        </Stack>
    </Stack>
  )
}

export default ContactsComponent
