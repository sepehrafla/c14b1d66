import React from 'react';
import './css/app.css';
import Header from './components/Header/Header.jsx';
import ActivityFeed from './components/ActivityFeed/ActivityFeed.jsx';
import CallDetail from './components/CallDetail/CallDetail';
import Navigation from './components/Navigation/Navigation.jsx';
import ArchiveActions from './components/ArchiveActions/ArchiveActions.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calls: [],
      activeTab: 'activity',
      loading: true,
      selectedCall: null,
      viewMode: 'list' // 'list' or 'detail'
    };
  }

  componentDidMount() {
    this.fetchCalls();
  }

  fetchCalls = async () => {
    try {
      const response = await fetch('https://aircall-api.onrender.com/activities');
      const data = await response.json();
      console.log('Fetched calls:', data);
      this.setState({
        calls: data,
        loading: false
      });
    } catch (error) {
      console.error('Error fetching calls:', error);
      this.setState({
        loading: false
      });
    }
  };

  fetchCallDetails = async (callId) => {
    try {
      const response = await fetch(`https://aircall-api.onrender.com/activities/${callId}`);
      const callData = await response.json();
      
      return callData;
    } catch (error) {
      console.error('Error fetching call details:', error);
      return null;
    }
  };

  handleArchiveCall = async (callId) => {
    try {
      await fetch(`https://aircall-api.onrender.com/activities/${callId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          is_archived: true
        })
      });
      
      // Update local state
      this.setState(prevState => ({
        calls: prevState.calls.map(call => 
          call.id === callId ? { ...call, is_archived: true } : call
        )
      }));
    } catch (error) {
      console.error('Error archiving call:', error);
    }
  };

  handleUnarchiveCall = async (callId) => {
    try {
      await fetch(`https://aircall-api.onrender.com/activities/${callId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          is_archived: false
        })
      });
      
      // Update local state
      this.setState(prevState => ({
        calls: prevState.calls.map(call => 
          call.id === callId ? { ...call, is_archived: false } : call
        )
      }));
    } catch (error) {
      console.error('Error unarchiving call:', error);
    }
  };

  handleArchiveAll = async () => {
    const { calls, activeTab } = this.state;
    const callsToArchive = calls.filter(call => !call.is_archived);
    
    try {
      // Update state first for immediate UI response
      this.setState(prevState => ({
        calls: prevState.calls.map(call => 
          !call.is_archived ? { ...call, is_archived: true } : call
        )
      }));
      
      // Then send requests to API
      for (const call of callsToArchive) {
        await fetch(`https://aircall-api.onrender.com/activities/${call.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            is_archived: true
          })
        });
      }
    } catch (error) {
      console.error('Error archiving all calls:', error);
      // Revert state on error
      this.fetchCalls();
    }
  };

  handleUnarchiveAll = async () => {
    const { calls } = this.state;
    const callsToUnarchive = calls.filter(call => call.is_archived);
    
    try {
      // Update state first for immediate UI response
      this.setState(prevState => ({
        calls: prevState.calls.map(call => 
          call.is_archived ? { ...call, is_archived: false } : call
        )
      }));
      
      // Then send requests to API
      for (const call of callsToUnarchive) {
        await fetch(`https://aircall-api.onrender.com/activities/${call.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            is_archived: false
          })
        });
      }
    } catch (error) {
      console.error('Error unarchiving all calls:', error);
      // Revert state on error
      this.fetchCalls();
    }
  };

  handleTabChange = (tab) => {
    this.setState({ 
      activeTab: tab,
      viewMode: 'list',
      selectedCall: null
    });
  };

  handleViewCall = async (call) => {
    this.setState({ loading: true });
    
    try {
      // Fetch the latest details for this call
      const callDetails = await this.fetchCallDetails(call.id);
      
      if (callDetails) {
        this.setState({
          selectedCall: callDetails,
          viewMode: 'detail',
          loading: false
        });
      } else {
        // Fall back to the call data we already have
        this.setState({
          selectedCall: call,
          viewMode: 'detail',
          loading: false
        });
      }
    } catch (error) {
      console.error('Error viewing call details:', error);
      this.setState({
        selectedCall: call,
        viewMode: 'detail',
        loading: false
      });
    }
  };

  handleBackToList = () => {
    this.setState({
      viewMode: 'list',
      selectedCall: null
    });
  };

  handleResetAllCalls = async () => {
    try {
      const response = await fetch('https://aircall-api.onrender.com/reset', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        // Refetch calls to update the UI
        this.fetchCalls();
      }
    } catch (error) {
      console.error('Error resetting calls:', error);
    }
  };

  render() {
    const { calls, activeTab, loading, selectedCall, viewMode } = this.state;
    
    // Filter calls based on active tab
    let filteredCalls = [];
    if (activeTab === 'activity') {
      filteredCalls = calls.filter(call => !call.is_archived);
    } else if (activeTab === 'archived') {
      filteredCalls = calls.filter(call => call.is_archived);
    } else if (activeTab === 'all') {
      filteredCalls = calls;
    }
    
    return (
      <div className="container">
        {viewMode === 'list' && (
          <div className="fixed-header">
            <Header 
              activeTab={activeTab} 
              onTabChange={this.handleTabChange} 
              viewMode={viewMode} 
              onBack={this.handleBackToList}
            />
          </div>
        )}
        
        <div className="scrollable-content">
          {loading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <div className="loading-text">Loading calls...</div>
            </div>
          ) : viewMode === 'list' ? (
            <>
              {(activeTab === 'activity' || activeTab === 'archived') && (
                <ArchiveActions
                  activeTab={activeTab}
                  onArchiveAll={this.handleArchiveAll}
                  onUnarchiveAll={this.handleUnarchiveAll}
                />
              )}
              <ActivityFeed 
                calls={filteredCalls} 
                activeTab={activeTab}
                onViewCall={this.handleViewCall}
                onArchiveCall={this.handleArchiveCall}
                onUnarchiveCall={this.handleUnarchiveCall}
              />
            </>
          ) : (
            <div className="call-detail-wrapper">
              <div className="detail-header">
                <button className="back-button" onClick={this.handleBackToList}>
                  <span style={{color: '#4CAF50', marginLeft: '-10px'}}>←</span>
                </button>
                <h1 className="detail-title">Call Details</h1>
              </div>
              <CallDetail 
                call={selectedCall}
                onArchiveCall={this.handleArchiveCall}
                onUnarchiveCall={this.handleUnarchiveCall}
                onBack={this.handleBackToList}
              />
            </div>
          )}
        </div>
        
        <div className="app-footer">
          <Navigation activeTab={activeTab} onTabChange={this.handleTabChange} />
        </div>
      </div>
    );
  }
}

export default App;
