// components/DisplayButton.js
import React, { useState } from 'react';
import { ReactComponent as DropdownIcon } from '../assets/down.svg';

const DisplayButton = ({
  groupingOption,
  onGroupingChange,
  sortingOption,
  onSortingChange,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleGroupingOptionChange = (option) => {
    onGroupingChange(option);
    setIsDropdownOpen(false);
  };

  const handleSortingOptionChange = (option) => {
    onSortingChange(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="display-button-container">
      <button className="display-button" onClick={toggleDropdown}>
        <span>Display</span>
        <DropdownIcon className={`dropdown-icon ${isDropdownOpen ? 'open' : ''}`} />
      </button>
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <h3>Grouping</h3>
          <ul>
            <li
              className={groupingOption === 'status' ? 'active' : ''}
              onClick={() => handleGroupingOptionChange('status')}
            >
              By Status
            </li>
            <li
              className={groupingOption === 'user' ? 'active' : ''}
              onClick={() => handleGroupingOptionChange('user')}
            >
              By User
            </li>
            <li
              className={groupingOption === 'priority' ? 'active' : ''}
              onClick={() => handleGroupingOptionChange('priority')}
            >
              By Priority
            </li>
          </ul>
          <h3>Sorting</h3>
          <ul>
            <li
              className={sortingOption === 'priority' ? 'active' : ''}
              onClick={() => handleSortingOptionChange('priority')}
            >
              Priority
            </li>
            <li
              className={sortingOption === 'title' ? 'active' : ''}
              onClick={() => handleSortingOptionChange('title')}
            >
              Title
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DisplayButton;