import React from 'react';
import './ActivityFeed.css';

// Add the missing organizeCalls function
const organizeCalls = (calls) => {
  const organized = {};
  
  calls.forEach(call => {
    // Format date from ISO string
    const date = new Date(call.created_at);
    const formattedDate = date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).toUpperCase();
    
    // Create date group if it doesn't exist
    if (!organized[formattedDate]) {
      organized[formattedDate] = [];
    }
    
    // Add call to the date group
    organized[formattedDate].push(call);
  });
  
  return organized;
};

// Helper function to format time
const formatTime = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });
};

const ActivityFeed = ({ calls, activeTab, onViewCall, onArchiveCall, onUnarchiveCall, onArchiveAll, onUnarchiveAll }) => {
  // Organize calls by date
  const organizedCalls = organizeCalls(calls);
  
  return (
    <div className="activity-feed">
      {/* Move button to a separate section with proper spacing */}
      <div className="feed-content">
        {Object.keys(organizedCalls).length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📞</div>
            <h2 className="empty-title">No calls to display</h2>
            <p className="empty-message">There are no calls in this category.</p>
          </div>
        ) : (
          Object.keys(organizedCalls).map(date => (
            <div key={date}>
              <div className="date-divider">
                <span className="date-text">{date}</span>
              </div>
              <div className="calls-list">
                {organizedCalls[date].map(call => (
                  <div 
                    key={call.id} 
                    className={`call-item ${call.call_type} ${call.is_archived ? 'archived' : ''}`}
                    onClick={() => onViewCall(call)}
                  >
                    <div className="call-left">
                      <div className={`call-icon ${call.direction} ${call.call_type}`}>
                        {call.direction === 'inbound' ? (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 4L4 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4 4L20 4L20 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        ) : (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 20L20 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M20 20L4 20L4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                      <div className="call-details">
                        <div className="call-from">
                          {call.from || call.to || "Unknown"}
                          {call.call_type === 'missed' && <span className="missed-indicator"></span>}
                          {activeTab === 'all' && call.is_archived && <span className="archived-badge">Archived</span>}
                        </div>
                        <div className="call-via">
                          <span className="via-text">via</span> {call.via || "Unknown"}
                        </div>
                      </div>
                    </div>
                    <div className="call-right">
                      <div className="call-time">
                        {formatTime(call.created_at)}
                      </div>
                      <button 
                        className="call-action"
                        onClick={(e) => {
                          e.stopPropagation();
                          call.is_archived ? onUnarchiveCall(call.id) : onArchiveCall(call.id);
                        }}
                      >
                        {call.is_archived ? 'Unarchive' : 'Archive'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ActivityFeed; 