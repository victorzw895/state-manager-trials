import { Event, User } from '../types';

const extraEvents = () => {
    return Array.from({length: 100}, (_, i) => ({
        id: `uniqueId_${i}`,
        title: `title${i}`,
        date: `${2022 + i}-04-27 15:00`,
        guests: ['Van Henry', 'April Tucker', 'Omar Alexander'],
        description: `extra event ${i}`
    }))
}

// export const eventsData: Event[] = [
//     {
//         title: 'bowling party',
//         date: '2022-04-13 19:18',
//         guests: ['Van Henry'],
//         description: 'Bowling at holey moley!'
//     },
//     {
//         title: 'Laser tag comp',
//         date: '2022-04-27 15:00',
//         guests: ['Van Henry', 'April Tucker', 'Omar Alexander'],
//         description: 'Serious laser tag competition. Winner gets 1M'
//     },
// ];

export const eventsData: Event[] = [
    {
        id: 'abcd',
        title: 'bowling party',
        date: '2022-04-13 19:18',
        guests: ['Van Henry'],
        description: 'Bowling at holey moley!'
    },
    {
        id: 'efghi',
        title: 'Laser tag comp',
        date: '2022-04-15 15:00',
        guests: ['Van Henry', 'April Tucker', 'Omar Alexander'],
        description: 'Serious laser tag competition. Winner gets 1M'
    },
    ...extraEvents()
]

export const usersData: User[] = [
    {
        id: '1',
        name: 'Oliver Hansen'
    },
    {
        id: '2',
        name: 'Van Henry',
    },
    {
        id: '3',
        name: 'April Tucker',
    },
    {
        id: '4',
        name: 'Ralph Hubbard',
    },
    {
        id: '5',
        name: 'Omar Alexander',
    },
    {
        id: '6',
        name: 'Carlos Abbott',
    },
    {
        id: '7',
        name: 'Miriam Wagner',
    },
    {
        id: '8',
        name: 'Bradley Wilkerson',
    },
    {
        id: '9',
        name: 'Virginia Andrews',
    },
    {
        id: '10',
        name: 'Kelly Snyder',
    },
];