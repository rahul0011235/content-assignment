// PriorityIcon.js
import React from 'react';

const PriorityIcon = ({ priority }) => {
  return (
    <span className={`priority-icon priority-${priority}`}>
      {priority === 4 && '⚡'}
      {priority === 3 && '🔴'}
      {priority === 2 && '🟡'}
      {priority === 1 && '🔵'}
      {priority === 0 && '⚪'}
    </span>
  );
};

export default PriorityIcon;