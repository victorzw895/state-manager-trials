import { FC, useEffect, useRef } from 'react';
import { Typography } from '@mui/material';
// import { useCounterContextDispatch } from './CounterContext';

const renderCounterOff = false;

interface RenderCounterProps {
    componentName: string
}

const colours = ['red', 'blue', 'green']

const RenderCounter: FC<RenderCounterProps> = ({componentName}) => {
    // const { appRenderCount } = useCounterContextDispatch();
    const renderCount = useRef(1);
    const fullyStrictMounted = useRef(false);

    /* Seens like React 18 causes useEffect with an empty dependency array or 
        without a dependency array to mount -> unmount -> mount
    */

   // React 18 Strict mode will cause this component useEffects to run twice on component mount
    useEffect(() => {
        // Adding this condition, so we count re-renders after component is 'Fully Mounted'
        if (fullyStrictMounted.current) {
            renderCount.current++;
        }
    });

   // React 18 Strict mode will cause this component useEffects to run twice on component mount
    useEffect(() => {
        // This condition will help component ignore first mount and track when the component is 'Fully Mounted'
        if (!fullyStrictMounted.current) {
            fullyStrictMounted.current = true;
        }
    }, [])

    if (renderCounterOff) return <></>

    return (
        <Typography
            className='anim'
            key={`render-${renderCount.current}`}
            sx={{
                border: `1px solid ${colours[renderCount.current % 3]}`,
                // border: `1px solid ${
                //     appRenderCount.current === renderCount.current ? 'red' : 
                //     appRenderCount.current - renderCount.current === 1 ? 'orange' :
                //     appRenderCount.current - renderCount.current === 2 ? 'yellow' :
                //     'transparent'
                // }`,
            }}
        >
            {`${renderCount.current <= 1 ? '' : 're-'}render ${componentName}: x${renderCount.current}`}
        </Typography>
    )
}

export default RenderCounter;