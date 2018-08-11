import parser from '../src/index';

it('returns object that has num and url with rels', () => {
  const linkStab = '<https://example.com/foo?page=30>; rel="last", <https://example.com/foo?page=2>; rel="next"';
  const links = parser(linkStab);

  expect(links).toEqual({
    last: {
      url: 'https://example.com/foo?page=30',
      num: 30,
    },
    next: {
      url: 'https://example.com/foo?page=2',
      num: 2,
    },
  });
});

it('throws an error when a link string is not valid', () => {
  expect(() => {
    parser('');
  }).toThrow(new Error('link is not valid string'));

  expect(() => {
    parser();
  }).toThrow(new Error('link is not valid string'));

  expect(() => {
    parser(1);
  }).toThrow(new Error('link is not valid string'));

  expect(() => {
    parser('<https://example.com/foo?page=30>; , <https://example.com/foo?page=2>; rel="next"');
  }).toThrow(new Error('link is not valid string'));
});
