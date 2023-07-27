import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Event } from "../../types";
import { getEvents, createEvent, putEvent } from "../../api/events";

export const EventsApi = () => {
    const queryClient = useQueryClient();

    const { 
        data,
        isError,
        isLoading,
    } = useQuery<Event[], Error>({ queryKey: ['events'], queryFn: getEvents})

    const {
        mutate: createEventMutation,
    } = useMutation({
        mutationFn: createEvent,
        onSuccess: (data) => {
            // Invalidate and refetch
            // void queryClient.invalidateQueries({ queryKey: ['events'] })
            queryClient.setQueryData(['events'], (events?: Event[]) => {
                return [...events || [], data];
            })
        },
    })

    const {
        mutate: putEventMutation,
    } = useMutation(
        {
            mutationFn: putEvent,
            onSuccess: (_data, variables) => {
                console.log({_data, variables})
                queryClient.setQueryData(['events'], (events?: Event[]) => {
                    if (events && events?.findIndex(event => event.id === variables.id) >= 0) {
                        return events?.map(eventsItem => {
                            if (eventsItem.id === variables.id) {
                                return variables
                            }
                            else return eventsItem
                        })
                    }
                    else return [...events || [], variables];
                })
            },
        }
    )

    return {
        events: !isError && !isLoading ? data : [],
        createEvent: createEventMutation,
        putEvent: putEventMutation,
    }
}