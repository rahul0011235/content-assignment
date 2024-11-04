// KanbanTicket.js
import React from 'react';
import PriorityIcon from './PriorityIcon';
import StatusIcon from './StatusIcon';

const Ticket = ({ ticket, grouping, users, getPriorityLabel }) => {
  return (
    <div className="ticket">
      <div className="ticket-header">
        <span className="ticket-id">{ticket.id}</span>
        {grouping !== 'user' && (
          <div className="user-avatar">
            {users.find((u) => u.id === ticket.userId)?.name.charAt(0)}
          </div>
        )}
      </div>
      <div className="ticket-title">
        {grouping !== 'status' && <StatusIcon status={ticket.status} />}
        <p>{ticket.title}</p>
      </div>
      <div className="ticket-footer">
        {grouping !== 'priority' && (
          <PriorityIcon priority={ticket.priority} />
        )}
        <span className="tag">Feature Request</span>
      </div>
    </div>
  );
};

export default Ticket;