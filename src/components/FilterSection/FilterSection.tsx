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
          value="ADMIN"
          checked={userType === 'ADMIN'}
          onChange={() => onUserTypeChange('ADMIN')}
        />
        ADMIN
      </label>
      <label>
        <input
          type="radio"
          name="userType"
          value="MANAGER"
          checked={userType === 'MANAGER'}
          onChange={() => onUserTypeChange('MANAGER')}
        />
        MANAGER
      </label>
    </div>
  );
};

export default FilterSection;
