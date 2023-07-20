import { FC, useState, useEffect, useRef } from 'react';
import { Typography } from '@mui/material';

interface RenderCounterProps {
    componentName: string
}

const RenderCounter: FC<RenderCounterProps> = ({componentName}) => {
    // const [renderCount, setRenderCount] = useState(0);

    // useEffect(() => {
    //     setRenderCount((prev) => prev + 1);
    //     console.log('rendercount', renderCount)
    // }, [componentName])
    const renderCount = useRef(0);
    renderCount.current = renderCount.current + 1;
    console.log('renderCount', componentName, renderCount.current)
    // useEffect(() => {
    //     renderCount.current = renderCount.current + 1;
    //     console.log('renderCount.current', renderCount.current)
    // });

    return (
        <Typography
            sx={{
                border: '1px solid black',
                // position: 'absolute',
                // top: '0',
                // right: '0',
            }}
        >
            {`${renderCount.current <= 1 ? '' : 're-'}render ${componentName}: x${renderCount.current}`}
        </Typography>
    )
}

export default RenderCounter;