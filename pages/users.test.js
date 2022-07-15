const fullname = require('./fullname');

test('Adds Prahlad + Sidar  to equal fullname Prahlad Sidar', () => {
  expect(fullname('Prahlad', 'Sidar')).toBe('Prahlad Sidar');
});

const users = require('./users')

test('the data is correct', () => {
  return users().then(data => {
    expect(data).toEqual({name: 'Prahlad', email: 'prahlads@gmail.com'})
  });
});