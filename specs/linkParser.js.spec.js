import parser from '../src/index';

it('returns object that has num and url with rels', () => {
  const linkStab = `
    <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=15>; rel="next",
    <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=34>; rel="last",
    <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=1>; rel="first",
    <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=13>; rel="prev"
  `;
  const links = parser(linkStab);

  expect(links).toEqual({
    first: {
      num: 1,
      url: 'https://api.github.com/search/code?q=addClass+user%3Amozilla&page=1',
    },
    last: {
      num: 34,
      url: 'https://api.github.com/search/code?q=addClass+user%3Amozilla&page=34',
    },
    next: {
      num: 15,
      url: 'https://api.github.com/search/code?q=addClass+user%3Amozilla&page=15',
    },
    prev: {
      num: 13,
      url: 'https://api.github.com/search/code?q=addClass+user%3Amozilla&page=13',
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
