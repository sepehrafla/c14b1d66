import { API_ENDPOINTS } from '../constants';

export const fetchCalls = async () => {
  try {
    const response = await fetch('https://aircall-api.onrender.com/activities');
    if (!response.ok) {
      throw new Error('Failed to fetch calls');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching calls:', error);
    throw error;
  }
};

export const archiveCall = async (id) => {
  try {
    const response = await fetch(API_ENDPOINTS.ARCHIVE(id), {
      method: 'POST',
    });
    if (!response.ok) {
      throw new Error('Failed to archive call');
    }
    return await response.json();
  } catch (error) {
    console.error('Error archiving call:', error);
    throw error;
  }
};

export const unarchiveCall = async (id) => {
  try {
    const response = await fetch(API_ENDPOINTS.UNARCHIVE(id), {
      method: 'POST',
    });
    if (!response.ok) {
      throw new Error('Failed to unarchive call');
    }
    return await response.json();
  } catch (error) {
    console.error('Error unarchiving call:', error);
    throw error;
  }
};

export const resetCalls = async () => {
  try {
    const response = await fetch(API_ENDPOINTS.RESET, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error('Failed to reset calls');
    }
    return await response.json();
  } catch (error) {
    console.error('Error resetting calls:', error);
    throw error;
  }
}; 