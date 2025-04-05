export const CALL_TYPES = {
  INCOMING: 'inbound',
  OUTGOING: 'outbound',
  MISSED: 'missed',
  ANSWERED: 'answered'
};

export const TAB_TYPES = {
  ACTIVITY: 'activity',
  ARCHIVED: 'archived',
  ALL: 'all'
};

export const VIEW_MODES = {
  LIST: 'list',
  DETAIL: 'detail'
};

export const API_ENDPOINTS = {
  ACTIVITIES: 'https://aircall-api.onrender.com/activities',
  ARCHIVE: (id) => `https://aircall-api.onrender.com/activities/${id}/archive`,
  UNARCHIVE: (id) => `https://aircall-api.onrender.com/activities/${id}/unarchive`,
  RESET: 'https://aircall-api.onrender.com/reset'
}; 