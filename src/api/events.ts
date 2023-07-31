import { Event } from '../types';

export const getEventsRequest = async () => {
    console.log('fetching events')
    // Mock fetching - MOCKOON APP
    const response = await fetch('http://localhost:3001/events');
    if (response.ok) {
        return await response.json() as Event[]
    }
    throw new Error('failed to get events');
}

export const putEventRequest = async (value: Event) => {
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
