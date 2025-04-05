import React from 'react';
import './Navigation.css';

const Navigation = ({ activeTab, onTabChange }) => {
  return (
    <nav className="navigation">
      <div className="nav-item">
        <button className="nav-button" onClick={() => onTabChange('activity')}>
          <div className={`nav-icon ${activeTab === 'activity' ? 'active' : ''}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 2H7C5.9 2 5 2.9 5 4V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V4C19 2.9 18.1 2 17 2ZM17 18H7V6H17V18Z" fill="currentColor"/>
              <path d="M12 19H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="badge">12</span>
          </div>
        </button>
      </div>
      <div className="nav-item">
        <button className="nav-button" onClick={() => {}}>
          <div className="nav-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
            </svg>
          </div>
        </button>
      </div>
      <div className="nav-item">
        <button className="nav-button" onClick={() => {}}>
          <div className="nav-icon keypad">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 16C13.1046 16 14 15.1046 14 14C14 12.8954 13.1046 12 12 12C10.8954 12 10 12.8954 10 14C10 15.1046 10.8954 16 12 16Z" fill="white"/>
              <path d="M12 10C13.1046 10 14 9.10457 14 8C14 6.89543 13.1046 6 12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10Z" fill="white"/>
              <path d="M18 16C19.1046 16 20 15.1046 20 14C20 12.8954 19.1046 12 18 12C16.8954 12 16 12.8954 16 14C16 15.1046 16.8954 16 18 16Z" fill="white"/>
              <path d="M18 10C19.1046 10 20 9.10457 20 8C20 6.89543 19.1046 6 18 6C16.8954 6 16 6.89543 16 8C16 9.10457 16.8954 10 18 10Z" fill="white"/>
              <path d="M6 16C7.10457 16 8 15.1046 8 14C8 12.8954 7.10457 12 6 12C4.89543 12 4 12.8954 4 14C4 15.1046 4.89543 16 6 16Z" fill="white"/>
              <path d="M6 10C7.10457 10 8 9.10457 8 8C8 6.89543 7.10457 6 6 6C4.89543 6 4 6.89543 4 8C4 9.10457 4.89543 10 6 10Z" fill="white"/>
            </svg>
          </div>
        </button>
      </div>
      <div className="nav-item">
        <button className="nav-button" onClick={() => {}}>
          <div className="nav-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.14 12.94C19.18 12.64 19.2 12.33 19.2 12C19.2 11.68 19.18 11.36 19.13 11.06C19.57 10.66 19.93 10.19 20.18 9.68C20.21 9.63 20.22 9.57 20.2 9.51C19.92 8.54 19.44 7.68 18.81 6.94C18.76 6.89 18.7 6.85 18.63 6.85C18.3 6.86 17.59 6.94 17.05 7.15C16.89 7.01 16.73 6.89 16.56 6.77C16.39 6.66 16.22 6.55 16.04 6.46C15.93 5.86 15.73 5.23 15.5 4.94C15.46 4.89 15.39 4.85 15.33 4.85H15.32C14.39 4.95 13.5 5.29 12.72 5.78C12.66 5.83 12.63 5.9 12.63 5.96C12.62 6.24 12.63 6.97 12.83 7.53C12.36 8.13 12 8.84 11.81 9.59C11.34 9.72 10.82 9.91 10.5 10.09C10.45 10.12 10.41 10.18 10.4 10.24C10.14 11.19 10.12 12.21 10.35 13.17C10.37 13.23 10.4 13.28 10.46 13.31C10.76 13.46 11.27 13.64 11.77 13.71C11.91 14.41 12.23 15.07 12.61 15.65C12.55 16.13 12.53 16.67 12.55 16.98C12.56 17.05 12.59 17.1 12.65 17.14C13.36 17.57 14.16 17.87 15 17.98C15.07 18 15.13 17.99 15.17 17.95C15.58 17.63 16.13 17.11 16.47 16.65C16.97 16.72 17.47 16.72 17.96 16.65C18.29 17.1 18.87 17.61 19.28 17.94C19.32 17.97 19.38 17.99 19.45 17.97C20.29 17.85 21.09 17.55 21.81 17.12C21.87 17.08 21.9 17.03 21.91 16.97C21.93 16.65 21.9 16.11 21.82 15.64" fill="currentColor"/>
            </svg>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navigation; 