import React from 'react';
import './ArchiveActions.css';

const ArchiveActions = ({ activeTab, onArchiveAll, onUnarchiveAll }) => {
  return (
    <div className="archive-actions">
      {activeTab === 'archived' ? (
        <button className="action-button unarchive-button" onClick={onUnarchiveAll}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 8H4V21H20V8Z" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 13H15" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 8V4C5 3.44772 5.44772 3 6 3H18C18.5523 3 19 3.44772 19 4V8" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Unarchive all calls</span>
        </button>
      ) : (
        <button className="action-button archive-button" onClick={onArchiveAll}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 8H4V21H20V8Z" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 13H15" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 8V4C5 3.44772 5.44772 3 6 3H18C18.5523 3 19 3.44772 19 4V8" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Archive all calls</span>
        </button>
      )}
    </div>
  );
};

export default ArchiveActions; 