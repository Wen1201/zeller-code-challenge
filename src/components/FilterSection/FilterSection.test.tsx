import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FilterSection from './FilterSection';

test('FilterSection component renders correctly', () => {
  const handleUserTypeChange = jest.fn();

  render(<FilterSection userType="ADMIN" onUserTypeChange={handleUserTypeChange} />);

  const adminRadio = screen.getByLabelText('ADMIN');
  expect(adminRadio).toBeInTheDocument();

  const managerRadio = screen.getByLabelText('MANAGER');
  expect(managerRadio).toBeInTheDocument();
});

test('User type change is handled correctly', () => {
  const handleUserTypeChange = jest.fn();

  render(<FilterSection userType="ADMIN" onUserTypeChange={handleUserTypeChange} />);

  const managerRadio = screen.getByLabelText('MANAGER');
  fireEvent.click(managerRadio);

  expect(handleUserTypeChange).toHaveBeenCalledWith('MANAGER');
});
