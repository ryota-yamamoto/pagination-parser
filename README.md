# pagination-parser
A parser for GitHub API style pagination info.

------

## Example

```js
const link = `
  <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=15>; rel="next",
  <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=34>; rel="last",
  <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=1>; rel="first",
  <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=13>; rel="prev"
`;
const parsed = parser(link);

/*
{
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
}
*/
```
