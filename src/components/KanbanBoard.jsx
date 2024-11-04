import React, { useState, useEffect } from 'react';
import KanbanColumn from './KanbanColumn';
import KanbanDropdown from './KanbanDropdown';
import '../styles/KanbanBoard.css';

const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(() => localStorage.getItem('grouping') || 'status');
  const [sorting, setSorting] = useState(() => localStorage.getItem('sorting') || 'priority');

  useEffect(() => {
    fetchData();
    localStorage.setItem('grouping', grouping);
    localStorage.setItem('sorting', sorting);
  }, [grouping, sorting]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await response.json();
      setTickets(data.tickets || []);
      setUsers(data.users || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getPriorityLabel = (priority) => {
    // Define priority label mapping
  };

  const groupTickets = () => {
    if (tickets.length === 0 || users.length === 0) {
      return {};
    }

    let grouped = {};

    if (grouping === 'status') {
      grouped = tickets.reduce((acc, ticket) => {
        acc[ticket.status] = [...(acc[ticket.status] || []), ticket];
        return acc;
      }, {});
    } else if (grouping === 'user') {
      grouped = tickets.reduce((acc, ticket) => {
        const user = users.find(u => u.id === ticket.userId);
        const userName = user ? user.name : 'Unassigned';
        acc[userName] = [...(acc[userName] || []), ticket];
        return acc;
      }, {});
    } else if (grouping === 'priority') {
      grouped = tickets.reduce((acc, ticket) => {
        const priority = getPriorityLabel(ticket.priority);
        acc[priority] = [...(acc[priority] || []), ticket];
        return acc;
      }, {});
    }

    // Sort tickets within each group
    Object.keys(grouped).forEach(key => {
      grouped[key].sort((a, b) => {
        if (sorting === 'priority') {
          return b.priority - a.priority;
        } else {
          return a.title.localeCompare(b.title);
        }
      });
    });

    return grouped;
  };

  const groupedTickets = groupTickets();

  return (
    <div className="kanban-container">
      <div className="header">
        <KanbanDropdown
          grouping={grouping}
          sorting={sorting}
          setGrouping={setGrouping}
          setSorting={setSorting}
        />
      </div>

      <div className="board">
        {Object.entries(groupedTickets).map(([group, tickets]) => (
          <KanbanColumn
            key={group}
            group={group}
            tickets={tickets}
            grouping={grouping}
            users={users}
            getPriorityLabel={getPriorityLabel}
          />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;