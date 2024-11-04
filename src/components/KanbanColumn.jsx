// KanbanColumn.js
import React from 'react';
import KanbanTicket from './KanbanTicket';
import PriorityIcon from './PriorityIcon';
import StatusIcon from './StatusIcon';

const KanbanColumn = ({ group, tickets, grouping, users, getPriorityLabel }) => {
  return (
    <div className="column">
      <div className="column-header">
        <div className="column-header-left">
          {grouping === 'status' && <StatusIcon status={group} />}
          {grouping === 'priority' && (
            <PriorityIcon
              priority={
                Object.keys(getPriorityLabel).find((key) =>
                  getPriorityLabel(parseInt(key)) === group
                )
              }
            />
          )}
          <span className="group-name">{group}</span>
          <span className="ticket-count">{tickets.length}</span>
        </div>
        <div className="column-header-right">
          <button className="icon-button">+</button>
          <button className="icon-button">⋮</button>
        </div>
      </div>

      <div className="ticket-list">
        {tickets.map((ticket) => (
          <KanbanTicket
            key={ticket.id}
            ticket={ticket}
            grouping={grouping}
            users={users}
            getPriorityLabel={getPriorityLabel}
          />
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;