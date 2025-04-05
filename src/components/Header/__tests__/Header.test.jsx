import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header';
import { TAB_TYPES, VIEW_MODES } from '../../../constants';

describe('Header Component', () => {
  const mockHandlers = {
    onTabChange: jest.fn(),
    onBack: jest.fn()
  };

  it('renders list view header correctly', () => {
    render(
      <Header 
        activeTab={TAB_TYPES.ACTIVITY} 
        viewMode={VIEW_MODES.LIST}
        onTabChange={mockHandlers.onTabChange}
        onBack={mockHandlers.onBack}
      />
    );
    
    expect(screen.getByText('Activity')).toBeInTheDocument();
    expect(screen.getByText('Archived')).toBeInTheDocument();
    expect(screen.getByText('All calls')).toBeInTheDocument();
  });

  it('renders detail view header correctly', () => {
    render(
      <Header 
        activeTab={TAB_TYPES.ACTIVITY} 
        viewMode={VIEW_MODES.DETAIL}
        onTabChange={mockHandlers.onTabChange}
        onBack={mockHandlers.onBack}
      />
    );
    
    expect(screen.getByText('Call Details')).toBeInTheDocument();
    const backButton = screen.getByRole('button');
    expect(backButton).toBeInTheDocument();
  });

  it('calls onTabChange when a tab is clicked', () => {
    render(
      <Header 
        activeTab={TAB_TYPES.ACTIVITY} 
        viewMode={VIEW_MODES.LIST}
        onTabChange={mockHandlers.onTabChange}
        onBack={mockHandlers.onBack}
      />
    );
    
    const archivedTab = screen.getByText('Archived');
    fireEvent.click(archivedTab);
    
    expect(mockHandlers.onTabChange).toHaveBeenCalledWith(TAB_TYPES.ARCHIVED);
  });

  it('calls onBack when back button is clicked in detail view', () => {
    render(
      <Header 
        activeTab={TAB_TYPES.ACTIVITY} 
        viewMode={VIEW_MODES.DETAIL}
        onTabChange={mockHandlers.onTabChange}
        onBack={mockHandlers.onBack}
      />
    );
    
    const backButton = screen.getByRole('button');
    fireEvent.click(backButton);
    
    expect(mockHandlers.onBack).toHaveBeenCalled();
  });
}); 