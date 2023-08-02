import { FC, PropsWithChildren, useState } from "react";
import { Context } from './Context';

const ContextProvider: FC<PropsWithChildren> = ({children}) => {
    const [loggedUserId, setLoggedUserId] = useState<string | null>(null)
    const [isDisabled, setIsDisabled] = useState<boolean>(false);

    return (
        <Context.Provider value={{
            loggedUserId,
            setLoggedUserId,
            isDisabled,
            setIsDisabled
        }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;

// Causes weird re-render behaviours
// To obtain normal re-render behavoiours, one would have to refactor context to be something like:
/*

interface LoginContextProps {
    loggedUserId: string | null;
    setLoggedUserId: Dispatch<SetStateAction<string | null>>;
}

const LoginContextProvider: FC<PropsWithChildren> = ({children}) => {
    const [loggedUserId, setLoggedUserId] = useState<string | null>(null)

    return (
        <LoginContext.Provider value={{
            loggedUserId,
            setLoggedUserId,
        }}>
            {children}
        </LoginContext.Provider>
    )
}

interface DisabledGetterProps {
    isDisabled: boolean;
}

interface DisabledSetterProps {
    setIsDisabled: Dispatch<SetStateAction<boolean>>;
}

const DisabledContextProvider: FC<PropsWithChildren> = ({children}) => {
    const [isDisabled, setIsDisabled] = useState<string | null>(null)

    return (
        <DisabledGetterContext.Provider value={{
            loggedUserId,
        }}>
            <DisabledSetterContext.Provider value={{
                setLoggedUserId,
            }}>
                {children}
            </DisabledSetterContext.Provider>
        </DisabledGetterContext.Provider>
    )
}

End up with Nested Context Hell

<LoginContextProvider>
    <DisabledContextProvider>
        <...AnyOtherContextProviders>
            <App />
        </...AnyOtherContextProviders>
    </DisabledContextProvider>
</LoginContextProvider>

*/