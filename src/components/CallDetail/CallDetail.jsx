import React from 'react';
import './CallDetail.css';

const CallDetail = ({ call, onArchiveCall, onUnarchiveCall, onBack }) => {
  if (!call) return null;
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }) + ' at ' + date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
  };
  
  const getCallTypeLabel = () => {
    if (call.direction === 'inbound') {
      return call.call_type === 'missed' ? 'Missed Call' : 'Answered Call';
    } else {
      return 'Outbound Call';
    }
  };
  
  return (
    <div className="call-detail">
      <div className="call-info-container">
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '32px'}}>
          <div className={`call-icon large ${call.direction} ${call.call_type}`}>
            {call.direction === 'inbound' ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 5L8 17L4 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
          <div className="call-type-label">{getCallTypeLabel()}</div>
          <h2 className="call-number">{call.from || 'Unknown'}</h2>
          <div className="call-date-time">{formatDate(call.created_at)}</div>
        </div>
        
        <div className="call-info-box" style={{backgroundColor: '#f8f9fa', borderRadius: '12px', padding: '16px', margin: '16px 0', border: 'none'}}>
          <table style={{width: '100%', borderCollapse: 'collapse'}}>
            <tbody>
              <tr style={{borderBottom: 'none', padding: '12px 0'}}>
                <td style={{textAlign: 'left', color: '#666', fontWeight: 500, padding: '12px 0'}}>Direction</td>
                <td style={{textAlign: 'right', color: '#333', fontWeight: 500, padding: '12px 0'}}>{call.direction === 'inbound' ? 'Incoming' : 'Outgoing'}</td>
              </tr>
              <tr style={{borderBottom: 'none', padding: '12px 0'}}>
                <td style={{textAlign: 'left', color: '#666', fontWeight: 500, padding: '12px 0'}}>From</td>
                <td style={{textAlign: 'right', color: '#333', fontWeight: 500, padding: '12px 0'}}>{call.from || 'Unknown'}</td>
              </tr>
              <tr style={{borderBottom: 'none', padding: '12px 0'}}>
                <td style={{textAlign: 'left', color: '#666', fontWeight: 500, padding: '12px 0'}}>To</td>
                <td style={{textAlign: 'right', color: '#333', fontWeight: 500, padding: '12px 0'}}>{call.to || 'Unknown'}</td>
              </tr>
              <tr style={{borderBottom: 'none', padding: '12px 0'}}>
                <td style={{textAlign: 'left', color: '#666', fontWeight: 500, padding: '12px 0'}}>Via</td>
                <td style={{textAlign: 'right', color: '#333', fontWeight: 500, padding: '12px 0'}}>{call.via || 'Unknown'}</td>
              </tr>
              <tr style={{borderBottom: 'none', padding: '12px 0'}}>
                <td style={{textAlign: 'left', color: '#666', fontWeight: 500, padding: '12px 0'}}>Duration</td>
                <td style={{textAlign: 'right', color: '#333', fontWeight: 500, padding: '12px 0'}}>{call.duration ? `${call.duration}s` : 'N/A'}</td>
              </tr>
              <tr style={{borderBottom: 'none', padding: '12px 0'}}>
                <td style={{textAlign: 'left', color: '#666', fontWeight: 500, padding: '12px 0'}}>Status</td>
                <td style={{textAlign: 'right', color: '#333', fontWeight: 500, padding: '12px 0'}}>{call.is_archived ? 'Archived' : 'Not Archived'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div style={{padding: '0 16px 16px'}}>
        <button 
          className="archive-call-button" 
          onClick={() => call.is_archived ? onUnarchiveCall(call.id) : onArchiveCall(call.id)}
          style={{
            width: '100%',
            background: 'white',
            color: '#4CAF50',
            border: '1px solid rgba(0,0,0,0.08)',
            borderRadius: '10px',
            padding: '16px',
            fontSize: '16px',
            fontWeight: '600',
            marginTop: '24px',
            cursor: 'pointer',
            boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
          }}
        >
          {call.is_archived ? 'Unarchive Call' : 'Archive Call'}
        </button>
      </div>
    </div>
  );
};

export default CallDetail; 