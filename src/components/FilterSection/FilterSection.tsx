import React from 'react';
import Radio from '../Common/Radio';

interface FilterSectionProps {
  userType: string;
  onUserTypeChange: (userType: string) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ userType, onUserTypeChange }) => {
  return (
    <div>
        <h1>User Types</h1>
        <Radio
          name="Admin"
          value="ADMIN"
          checked={userType === 'ADMIN'}
          onChange={() => onUserTypeChange('ADMIN')}
        />
        <Radio
          name="Manager"
          value="MANAGER"
          checked={userType === 'MANAGER'}
          onChange={() => onUserTypeChange('MANAGER')}
        />
    </div>
  );
};

export default FilterSection;
