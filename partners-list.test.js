import listMembers from './partners-list';

test('Test for Partners List', () => {
  const a = [{
    name: 'Gallus Consulting',
    address:
      'Newton House, Northampton Science Park, Moulton Park, Kings Park Road, Northampton, NN3 6LG',
  }];
  expect(listMembers()).toEqual(a);
});
