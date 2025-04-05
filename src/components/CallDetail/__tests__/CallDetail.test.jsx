import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CallDetail from '../CallDetail';
import { CALL_TYPES } from '../../../constants';

describe('CallDetail Component', () => {
  const mockCall = {
    id: '123',
    direction: CALL_TYPES.INCOMING,
    call_type: 'answered',
    from: '1',
    to: '2',
    via: '1',
    created_at: '2024-07-03T15:05:00.000Z',
    is_archived: false
  };

  it('renders call details correctly', () => {
    render(<CallDetail call={mockCall} />);
    
    // Check if main elements exist
    expect(screen.getByText('Answered Call')).toBeInTheDocument();
    expect(screen.getByText(/July 3, 2024/)).toBeInTheDocument();
    
    // Check call info table cells
    expect(screen.getByText('Direction')).toBeInTheDocument();
    expect(screen.getByText('Incoming')).toBeInTheDocument();
    expect(screen.getByText('From')).toBeInTheDocument();
    expect(screen.getByText('To')).toBeInTheDocument();
    expect(screen.getByText('Not Archived')).toBeInTheDocument();
  });

  it('displays "N/A" when duration is not provided', () => {
    render(<CallDetail call={mockCall} />);
    expect(screen.getByText('N/A')).toBeInTheDocument();
  });

  it('handles null call gracefully', () => {
    const { container } = render(<CallDetail call={null} />);
    expect(container).toBeEmptyDOMElement();
  });
}); 