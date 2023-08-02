import { Dispatch, SetStateAction, createContext } from "react";

interface ContextProps {
    loggedUserId: string | null;
    setLoggedUserId: Dispatch<SetStateAction<string | null>>;
    isDisabled: boolean;
    setIsDisabled: Dispatch<SetStateAction<boolean>>;
}

export const Context = createContext<ContextProps | undefined>(undefined);

// Causes weird re-render behaviours
// To obtain normal re-render behavoiours, one would have to refactor context to be something like:
/*

interface LoginContextProps {
    loggedUserId: string | null;
    setLoggedUserId: Dispatch<SetStateAction<string | null>>;
}

export const LoginContext = createContext<LoginContextProps | undefined>(undefined);

interface DisabledGetterProps {
    isDisabled: boolean;
}

export const DisabledGetterPropsContext = createContext<DisabledGetterPropsContextProps | undefined>(undefined);

interface DisabledSetterProps {
    setIsDisabled: Dispatch<SetStateAction<boolean>>;
}

export const DisabledSetterPropsContext = createContext<DisabledSetterPropsContextProps | undefined>(undefined);

*/