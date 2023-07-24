import { Event, User } from '../types';

const extraEvents = () => {
    return Array.from({length: 100}, (_, i) => ({
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
        title: 'bowling party',
        date: '2022-04-13 19:18',
        guests: ['Van Henry'],
        description: 'Bowling at holey moley!'
    },
    {
        title: 'Laser tag comp',
        date: '2022-04-15 15:00',
        guests: ['Van Henry', 'April Tucker', 'Omar Alexander'],
        description: 'Serious laser tag competition. Winner gets 1M'
    },
    ...extraEvents()
]

export const usersData: User[] = [
    {
        name: 'Oliver Hansen'
    },
    {
        name: 'Van Henry',
    },
    {
        name: 'April Tucker',
    },
    {
        name: 'Ralph Hubbard',
    },
    {
        name: 'Omar Alexander',
    },
    {
        name: 'Carlos Abbott',
    },
    {
        name: 'Miriam Wagner',
    },
    {
        name: 'Bradley Wilkerson',
    },
    {
        name: 'Virginia Andrews',
    },
    {
        name: 'Kelly Snyder',
    },
];