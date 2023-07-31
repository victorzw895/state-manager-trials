import { User } from '../types';

export const getUsersRequest = async () => {
    // Mock fetching - MOCKOON APP
    const response = await fetch('http://localhost:3001/users');
    if (response.ok) {
        return await response.json() as User[]
    }
    throw new Error('failed to get users');
}

export const putUserRequest = async (value: User) => {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(value)
    };
    const response = await fetch('http://localhost:3001/users', requestOptions);
    if (response.ok) {
        return await response.json() as User;
    }
    throw new Error('failed to put user');
}
