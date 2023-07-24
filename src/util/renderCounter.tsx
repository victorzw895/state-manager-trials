import { FC, useEffect, useRef } from 'react';
import { Typography } from '@mui/material';

interface RenderCounterProps {
    componentName: string
}

const RenderCounter: FC<RenderCounterProps> = ({componentName}) => {
    const renderCount = useRef(1);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    });

    return (
        <Typography
            sx={{
                border: '1px solid black',
            }}
        >
            {`${renderCount.current <= 1 ? '' : 're-'}render ${componentName}: x${renderCount.current}`}
        </Typography>
    )
}

export default RenderCounter;