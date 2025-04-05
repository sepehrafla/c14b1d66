import React from 'react';
import './Header.css';

const Header = ({ activeTab, viewMode, onBack, onTabChange }) => {
  return (
    <>
      {viewMode === 'detail' ? (
        <header className="header detail-header">
          <div className="header-detail">
            <button className="back-button" onClick={onBack}>
              <span className="back-icon">←</span>
            </button>
            <h1 className="detail-title">Call Details</h1>
          </div>
        </header>
      ) : (
        <header className="header">
          <div className="header-content">
            <div className="logo-container">
              <div className="logo-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z" fill="white"/>
                </svg>
              </div>
            </div>
            
            <div className="tab-bar">
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
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default Header; 