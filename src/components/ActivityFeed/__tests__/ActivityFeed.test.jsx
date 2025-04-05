import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ActivityFeed from '../ActivityFeed';
import { CALL_TYPES, TAB_TYPES } from '../../../constants';

describe('ActivityFeed Component', () => {
  const mockCalls = [
    {
      id: '1',
      from: '1',
      to: '2',
      direction: CALL_TYPES.INCOMING,
      call_type: 'answered',
      is_archived: false,
      created_at: '2024-07-03T15:05:00.000Z'
    },
    {
      id: '2',
      from: '2',
      to: '1',
      direction: CALL_TYPES.OUTGOING,
      call_type: 'answered',
      is_archived: false,
      created_at: '2024-07-03T16:41:00.000Z'
    }
  ];

  const mockHandlers = {
    onViewCall: jest.fn(),
    onArchiveCall: jest.fn(),
    onUnarchiveCall: jest.fn()
  };

  it('renders call items correctly when calls are provided', () => {
    render(
      <ActivityFeed 
        calls={mockCalls} 
        activeTab={TAB_TYPES.ACTIVITY}
        onViewCall={mockHandlers.onViewCall}
        onArchiveCall={mockHandlers.onArchiveCall}
        onUnarchiveCall={mockHandlers.onUnarchiveCall}
      />
    );
    
    expect(screen.getByText('JUL 3, 2024')).toBeInTheDocument();
  });

  it('displays empty state when no calls', () => {
    render(
      <ActivityFeed 
        calls={[]} 
        activeTab={TAB_TYPES.ACTIVITY}
        onViewCall={mockHandlers.onViewCall}
        onArchiveCall={mockHandlers.onArchiveCall}
        onUnarchiveCall={mockHandlers.onUnarchiveCall}
      />
    );
    
    expect(screen.getByText('No calls to display')).toBeInTheDocument();
  });
}); 