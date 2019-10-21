const app = require('../../src/app');

describe('\'goals\' service', () => {
  it('registered the service', () => {
    const service = app.service('goals');
    expect(service).toBeTruthy();
  });
});
