import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import { User } from "../../types";
import { getUsersRequest, putUserRequest } from "../../api/users";

export const useUsers = () => {
    const { data = [], error, isLoading } = useSWR<User[], Error>(
        `/api/users`,
        getUsersRequest
    )

    const { trigger: putUser } = useSWRMutation(
        '/api/users',
        async  (_key: string, {arg}: {arg: User}) => await putUserRequest(arg),
        {
            populateCache: (responseData: User, oldUsers: User[]) => {
                if (oldUsers.findIndex(user => user.id === responseData.id) >= 0) {
                    return oldUsers.map(usersItem => {
                        if (usersItem.id === responseData.id) {
                            return responseData
                        }
                        else return usersItem
                    })
                }
                else return [...oldUsers, responseData];
            },
            revalidate: false
        }
    )

    return {
      users: data,
      putUser,
    }
  }