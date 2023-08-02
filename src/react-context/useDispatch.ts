import { useContext } from "react";
import { Context } from './Context';

export const useContextDispatch = () => {
    const context = useContext(Context);
    if (context === undefined) {
        throw new Error('useContextDispatch must be used within a ContextProvider');
    }
    return context;
}
