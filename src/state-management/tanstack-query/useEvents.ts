import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Event } from "../../types";
import { getEventsRequest, putEventRequest } from "../../api/events";

export const useEvents = () => {
    const queryClient = useQueryClient();

    const { data = [], isError, isLoading } = useQuery<Event[], Error>(
        {
            queryKey: ['events'],
            queryFn: getEventsRequest
        }
    )

    // if making a request for event by Id, we can also use selectors if a component only needs to consume specific data
    // eg.
    // const { data } = useQuery(['user'], fetchUser, {
    //     select: user => user.username,
    // })

    const {
        mutateAsync: putEvent,
    } = useMutation(
        {
            mutationFn: putEventRequest,
            onSuccess: (data, _variables) => {
                // data is response from post request
                // variables is data passed to mutateAsync function
                console.log({data, _variables})
                // Invalidate and refetch
                // void queryClient.invalidateQueries({ queryKey: ['events'] })
                queryClient.setQueryData(['events'], (events?: Event[]) => {
                    if (!events) return;
                    if (events.findIndex(event => event.id === data.id) >= 0) {
                        return events.map(eventsItem => {
                            if (eventsItem.id === data.id) {
                                return data
                            }
                            else return eventsItem
                        })
                    }
                    else return [...events, data];
                })
            },
        }
    )

    return {
        events: data,
        putEvent,
    }
}