export interface Event {
    id: string;
    title: string;
    date: string;
    guests: string[];
    description: string;
    createdBy: string
}

export interface User {
    id: string;
    name: string;
}
