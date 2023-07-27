import { useState, useEffect } from "react";
import { Event } from '../types';

export const getEvents = async () => {
    // Mock fetching - MOCKOON APP
    const response = await fetch('http://localhost:3001/events');
    if (response.ok) {
        return await response.json() as Event[]
    }
    throw new Error('failed to get events');
}

export const createEvent = async (value: Event) => {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(value)
    };
    const response = await fetch('http://localhost:3001/events', requestOptions);
    if (response.ok) {
        return await response.json() as Event;
    }
    throw new Error('failed to update events');
}

export const putEvent = async (value: Event) => {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(value)
    };
    const response = await fetch('http://localhost:3001/events', requestOptions);
    if (response.ok) {
        return await response.json() as Event;
    }
    throw new Error('failed to put event');
}

// export const postEvents = 

export const EventsApi = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error>();
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        void (async () => {
            try {
                setIsLoading(true);
                const data = await getEvents();
                setEvents(data);
            } catch (error) {
                setError(error as Error)
            }
            setIsLoading(false);
        })()
    }, []);

    return { events, error, isLoading }
}