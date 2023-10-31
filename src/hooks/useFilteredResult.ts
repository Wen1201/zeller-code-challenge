import { useState, useMemo, useCallback } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { ListZellerCustomers as query } from '../graphql/queries';

export type UserType = {
  email: string;
  id: string;
  name: string;
  role: 'Manager' | 'Admin';
};

type GraphQLResponseType = {
  listZellerCustomers: {
    items: UserType[];
  };
};

const useFilteredResult = (userType: string) => {
  const [users, setUsers] = useState<UserType[] | null>(null);

  const fetchUsers = useCallback(async () => {
    try {
      const result = (await API.graphql(graphqlOperation(query))) as {
        data: GraphQLResponseType;
      };

      setUsers(result.data.listZellerCustomers.items);
    } catch (error) {
      console.error('Error occurs when fetching users', error);
    }
  }, []);

  const filteredUsers = useMemo(() => {
    return users && users.filter((user) => user.role === userType);
  }, [users, userType]);

  return { filteredUsers, fetchUsers };
};

export default useFilteredResult;
