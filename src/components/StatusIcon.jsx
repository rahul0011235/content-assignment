// StatusIcon.js
import React from 'react';

const StatusIcon = ({ status }) => {
  return (
    <span className={`status-icon status-${status.toLowerCase().replace(' ', '-')}`}>
      {status === 'Done' && '✓'}
      {status === 'In Progress' && '⏳'}
      {status === 'Todo' && '○'}
    </span>
  );
};

export default StatusIcon;