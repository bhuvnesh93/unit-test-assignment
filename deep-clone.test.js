import deepClone from './deep-clone';

test('Test for deepClone method', () => {
  const a = {
    name: 'Paddy',
    address: { town: 'Lerum', country: 'Sweden' },
  };
  expect(deepClone(a)).toEqual(a);
});
