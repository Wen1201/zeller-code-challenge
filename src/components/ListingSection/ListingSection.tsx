import { useEffect } from 'react';
import useFilteredResult from '../../hooks/useFilteredResult';
import styled from 'styled-components';
import ListingItem from '../ListingItem';
import CapitalizeFirstLetter from '../../utils/utils';

type ListingSectionType = {
  userType: string;
};

const Header = styled.h1`
  margin-bottom: 40px;
`;

const ListingSection = ({ userType }: ListingSectionType) => {
  const { filteredUsers, fetchUsers } = useFilteredResult(userType);
  const header = `${CapitalizeFirstLetter(userType)} Users`;

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
