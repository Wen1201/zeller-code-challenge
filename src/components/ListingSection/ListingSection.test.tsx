import { render, waitFor } from '@testing-library/react';
import ListingSection from './ListingSection';
import ListingItem from '../ListingItem/ListingItem';
import useFilteredResult from '../../hooks/useFilteredResult';
import mockFilteredUsers from '../../hooks/mockFilteredUsers.json';

jest.mock('../ListingItem/ListingItem', () => jest.fn());
jest.mock('../../hooks/useFilteredResult', () => jest.fn());

describe('<ListingSection />', () => {
  const useType = 'ADMIN';
  const fetchUsers = jest.fn();

  beforeEach(() => {
    (useFilteredResult as jest.Mock).mockReturnValue({
      filteredUsers: mockFilteredUsers,
      fetchUsers,
    });
  });

  afterEach(() => {
    (ListingItem as jest.Mock).mockClear();
    (useFilteredResult as jest.Mock).mockReset();
  });

  it('should call useFilterUser hooks with user type', async () => {
    render(<ListingSection userType={useType} />);

    await waitFor(() => {
      expect(useFilteredResult).toHaveBeenCalledWith(useType);
    });

    await waitFor(() => {
      expect(fetchUsers).toHaveBeenCalledTimes(1);
    });
  });

  it('should render <ListingItem /> with filtered users', async () => {
    render(<ListingSection userType={useType} />);

    await waitFor(() => {
      expect(ListingItem).toHaveBeenCalledTimes(mockFilteredUsers.length);
    });
  });
});
