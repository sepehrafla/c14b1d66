import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../App';
import * as api from '../../services/api';

// Mock the API calls
jest.mock('../../services/api', () => ({
  fetchCalls: jest.fn(() => Promise.resolve([
    {
      id: '1',
      from: '1',
      to: '2',
      direction: 'inbound',
      call_type: 'answered',
      is_archived: false,
      created_at: '2024-07-03T15:05:00.000Z',
      via: '1'
    },
    {
      id: '2',
      from: '2',
      to: '1',
      direction: 'outbound',
      call_type: 'answered',
      is_archived: false,
      created_at: '2024-07-03T16:41:00.000Z',
      via: '1'
    }
  ])),
  archiveCall: jest.fn(() => Promise.resolve({ success: true })),
  unarchiveCall: jest.fn(() => Promise.resolve({ success: true })),
  resetCalls: jest.fn(() => Promise.resolve({ success: true }))
}));

describe('Call Workflow Integration', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  // Test for switching between tabs
  it('switches between tabs correctly', async () => {
    render(<App />);
    
    // Wait for calls to load
    await waitFor(() => expect(screen.queryByText('Loading calls...')).not.toBeInTheDocument());
    
    // Check that we're on the Activity tab
    expect(screen.getByText('Activity')).toBeInTheDocument();
    
    // Switch to Archived tab
    const archivedTab = screen.getByText('Archived');
    fireEvent.click(archivedTab);
    
    // Switch to All calls tab
    const allCallsTab = screen.getByText('All calls');
    fireEvent.click(allCallsTab);
    
    // Switch back to Activity tab
    const activityTab = screen.getByText('Activity');
    fireEvent.click(activityTab);
  });

  // Simplified test for the archive button
  it('shows the "Archive all calls" button in Activity tab', async () => {
    render(<App />);
    
    // Wait for calls to load
    await waitFor(() => expect(screen.queryByText('Loading calls...')).not.toBeInTheDocument());
    
    // Verify Archive all calls button is present by using a text selector that matches part of the button content
    const archiveButton = screen.getByText(/Archive all calls/i);
    expect(archiveButton).toBeInTheDocument();
  });
}); 