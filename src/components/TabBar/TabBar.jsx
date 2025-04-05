import React from 'react';
import './TabBar.css';

const TabBar = ({ activeTab, onTabChange }) => {
  return (
    <nav className="tab-bar">
      <button 
        className={`tab ${activeTab === 'activity' ? 'active' : ''}`}
        onClick={() => onTabChange('activity')}
      >
        Activity
      </button>
      <button 
        className={`tab ${activeTab === 'archived' ? 'active' : ''}`}
        onClick={() => onTabChange('archived')}
      >
        Archived
      </button>
      <button 
        className={`tab ${activeTab === 'all' ? 'active' : ''}`}
        onClick={() => onTabChange('all')}
      >
        All calls
      </button>
    </nav>
  );
};

export default TabBar; 