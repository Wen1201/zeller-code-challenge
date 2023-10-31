import React from 'react';

interface FilterSectionProps {
  userType: string;
  onUserTypeChange: (userType: string) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ userType, onUserTypeChange }) => {
  return (
    <div>
      <label>
        <input
          type="radio"
          name="userType"
          value="Admin"
          checked={userType === 'Admin'}
          onChange={() => onUserTypeChange('Admin')}
        />
        Admin
      </label>
      <label>
        <input
          type="radio"
          name="userType"
          value="Manager"
          checked={userType === 'Manager'}
          onChange={() => onUserTypeChange('Manager')}
        />
        Manager
      </label>
    </div>
  );
};

export default FilterSection;
