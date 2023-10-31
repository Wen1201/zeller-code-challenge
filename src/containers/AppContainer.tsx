import styled from 'styled-components';
import { useState } from 'react';
import FilterSection from '../components/FilterSection/FilterSection';

const Container = styled.div`
  padding: 10px;
  max-width: 1000px;
  margin: auto;
`;

const AppContainer = () => {
  const [userType, setUserType] = useState<string>('ADMIN');

  return (
    <Container>
      <FilterSection userType={userType} onUserTypeChange={setUserType} />
    </Container>
  );
};

export default AppContainer;