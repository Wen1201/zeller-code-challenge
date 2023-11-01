import { render, screen } from '@testing-library/react';
import ListingItem from './ListingItem';

describe('<ListingItem />', () => {
  const user = {
    email: 'test@email.com',
    id: 'test-id',
    name: 'Test Name',
    role: 'ADMIN' as const,
  };
  const convertedRole = 'ADMIN';

  it('should render avatar with cap=cased first letter letter of user name', () => {
    render(<ListingItem user={user} />);

    expect(screen.getByText('T')).toBeInTheDocument();
  });

  it('should render user name and role', () => {
    render(<ListingItem user={user} />);

    expect(screen.getByText(user.name)).toBeInTheDocument();
    expect(screen.getByText(convertedRole)).toBeInTheDocument();
  });
});
