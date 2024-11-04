// KanbanDropdown.js
import React, { useState } from 'react';

const KanbanDropdown = ({ grouping, sorting, setGrouping, setSorting }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="header">
      <button
        className="display-button"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <span>Display</span>
        <span className="icon">⋮</span>
      </button>

      {isDropdownOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-group">
            <label>Grouping</label>
            <select
              value={grouping}
              onChange={(e) => setGrouping(e.target.value)}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-group">
            <label>Ordering</label>
            <select
              value={sorting}
              onChange={(e) => setSorting(e.target.value)}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default KanbanDropdown;