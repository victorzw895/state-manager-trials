import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { User } from "../../types";
import { getUsersRequest, putUserRequest } from "../../api/users";

export const useUsers = () => {
    const queryClient = useQueryClient();

    const { data = [], isError, isLoading } = useQuery<User[], Error>(
        {
            queryKey: ['users'],
            queryFn: getUsersRequest
        }
    )

    const {
        mutateAsync: putUser,
    } = useMutation(
        {
            mutationFn: putUserRequest,
            onSuccess: (data, _variables) => {
                // Invalidate and refetch
                // void queryClient.invalidateQueries({ queryKey: ['users'] })
                queryClient.setQueryData(['users'], (users?: User[]) => {
                    if (!users) return;
                    if (users.findIndex(user => user.id === data.id) >= 0) {
                        return users.map(usersItem => {
                            if (usersItem.id === data.id) {
                                return data
                            }
                            else return usersItem
                        })
                    }
                    else return [...users, data];
                })
            },
        }
    )

    return {
        users: data,
        putUser,
    }
}