import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// Use a version of setupServer compatible with Node 16
export const server = setupServer(...handlers); 