import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import { Event } from "../../types";
import { getEventsRequest, putEventRequest } from "../../api/events";

export const useEvents = () => {
    const { data = [], error, isLoading } = useSWR<Event[], Error>(
        `/api/events`,
        getEventsRequest
    )

    const { trigger: putEvent } = useSWRMutation(
        '/api/events',
        async  (_key: string, {arg}: {arg: Event}) => await putEventRequest(arg),
        {
            populateCache: (responseData: Event, oldEvents: Event[]) => {
                if (oldEvents.findIndex(event => event.id === responseData.id) >= 0) {
                    return oldEvents.map(eventsItem => {
                        if (eventsItem.id === responseData.id) {
                            return responseData
                        }
                        else return eventsItem
                    })
                }
                else return [...oldEvents, responseData];
            },
            revalidate: false
        }
    )

    return {
      events: data,
      putEvent,
    }
  }