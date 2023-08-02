import { FC, PropsWithChildren, createContext, useContext, useRef, useEffect, useState } from "react";

interface CounterContextProps {
    appRenderCount: React.MutableRefObject<number>;
    // appRenderCount: number;
    setAppRenderCount: (count: number) => void;
}

export const CounterContext = createContext<CounterContextProps | undefined>(undefined);

export const CounterContextProvider: FC<PropsWithChildren> = ({children}) => {
    // const [latestRenderCount, setLatestRenderCount] = useState(0);
    const renderCount = useRef(1);
//     const fullyStrictMounted = useRef(false);

//     /* Seens like React 18 causes useEffect with an empty dependency array or 
//         without a dependency array to mount -> unmount -> mount
//     */

// //    React 18 Strict mode will cause this component useEffects to run twice on component mount
//     useEffect(() => {
//         console.log('here', renderCount)
//         // Adding this condition, so we count re-renders after component is 'Fully Mounted'
//         if (fullyStrictMounted.current) {
//             renderCount.current++;
//         }
//     });

//     // React 18 Strict mode will cause this component useEffects to run twice on component mount
//     useEffect(() => {
//         // This condition will help component ignore first mount and track when the component is 'Fully Mounted'
//         if (!fullyStrictMounted.current) {
//             fullyStrictMounted.current = true;
//         }
//     }, [])

    const updateLatestRenderCount = (count: number) => {
        if (count > renderCount.current) renderCount.current = count;
    }

    return (
        <CounterContext.Provider value={{
            appRenderCount: renderCount,
            setAppRenderCount: updateLatestRenderCount
        }}>
            {children}
        </CounterContext.Provider>
    )
}

export const useCounterContextDispatch = () => {
    const context = useContext(CounterContext);
    if (context === undefined) {
        throw new Error('useCounterContextDispatch must be used within a CounterContextProvider');
    }
    return context;
}
