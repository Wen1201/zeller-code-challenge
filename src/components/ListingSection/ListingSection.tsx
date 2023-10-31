import { useEffect } from 'react';
import useFilteredResult from '../../hooks/useFilteredResult';
import styled from 'styled-components';
import ListingItem from '../ListingItem';

type ListingSectionType = {
  userType: string;
};

const Header = styled.div`
  font-size: 24px;
  font-weight: 900;
  margin-bottom: 40px;
`;

const ListingSection = ({ userType }: ListingSectionType) => {
  const { filteredUsers, fetchUsers } = useFilteredResult(userType);
  const header = `${userType.toUpperCase()} Users`;

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <>
      <Header>{header}</Header>
      {filteredUsers &&
        filteredUsers.map((user) => (
          <ListingItem key={user.id.toString()} user={user} />
        ))}
    </>
  );
};

export default ListingSection;
