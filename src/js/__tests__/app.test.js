import ErrorRepository from '../app';

const err1 = new ErrorRepository();

test('error checking', () => {
  const received = err1.translate(200);
  const expected = 'Unknown error';
  expect(received).toBe(expected);
});

test('get description error', () => {
  const received = err1.translate(204);
  const expected = 'No Content';
  expect(received).toBe(expected);
});
