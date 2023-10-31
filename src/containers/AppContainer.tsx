import styled from 'styled-components';
import { useState } from 'react';
import FilterSection from '../components/FilterSection/FilterSection';
import ListingSection from '../components/ListingSection';

const Container = styled.div`
  padding: 10px;
  max-width: 1000px;
  margin: auto;
`;

const AppContainer = () => {
  const [userType, setUserType] = useState<string>('Admin');

  return (
    <Container>
      <FilterSection userType={userType} onUserTypeChange={setUserType} />
      <ListingSection userType={userType} />
    </Container>
  );
};

export default AppContainer;