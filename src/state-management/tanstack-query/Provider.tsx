import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
import { FC, PropsWithChildren } from 'react';
  
const queryClient = new QueryClient(
// {
//   defaultOptions: {
//     queries: { queryFn: defaultQueryFn },
//   },
// }
);

const QueryProvider: FC<PropsWithChildren> = ({children}) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default QueryProvider;