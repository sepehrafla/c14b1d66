import { rest } from 'msw';

export const mockApiCalls = [
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
  },
  {
    id: '3',
    from: '1',
    to: '2',
    direction: 'inbound',
    call_type: 'missed',
    is_archived: true,
    created_at: '2024-07-13T19:21:00.000Z'
  }
];

export const handlers = [
  // Mock both possible endpoints
  rest.get('https://aircall-job.herokuapp.com/activities', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockApiCalls));
  }),
  
  rest.get('https://aircall-api.onrender.com/activities', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockApiCalls));
  }),
  
  rest.post('https://aircall-job.herokuapp.com/activities/:id/archive', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ success: true }));
  }),
  
  rest.post('https://aircall-api.onrender.com/activities/:id/archive', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ success: true }));
  }),
  
  rest.post('https://aircall-job.herokuapp.com/activities/:id/unarchive', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ success: true }));
  }),
  
  rest.post('https://aircall-api.onrender.com/activities/:id/unarchive', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ success: true }));
  }),
  
  rest.get('https://aircall-job.herokuapp.com/reset', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ success: true }));
  }),
  
  rest.get('https://aircall-api.onrender.com/reset', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ success: true }));
  })
]; 