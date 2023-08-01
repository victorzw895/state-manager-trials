import { FC } from 'react';
import { 
    TextField,
} from '@mui/material';

interface TextFieldComponentProps {
    id: string;
    title?: string;
    description?: string;
    disabled: boolean;
}

const TextFieldComponent: FC<TextFieldComponentProps> = ({id, title, description, disabled}) => {
    const name = title ? 'title' : 'description';

    return (
        <TextField
            key={`${name}-${id}`}
            label={name}
            name={name}
            variant='standard'
            InputLabelProps={{ shrink: true }}
            defaultValue={title || description}
            required
            disabled={disabled}
        />
    )
}

export default TextFieldComponent;