import '@testing-library/jest-dom';
import 'isomorphic-fetch';
import { server } from './mocks/server';

// Enable API mocking before tests
beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }));

// Reset handlers after each test
afterEach(() => server.resetHandlers());

// Clean up after all tests
afterAll(() => server.close()); 