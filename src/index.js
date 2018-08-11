import URL from 'url-parse';

export default (link) => {
  if (typeof link !== 'string' || link.length === 0) {
    throw new Error('link is not valid string');
  }

  const lines = link.split(',');
  const matches = lines.map((line) => {
    const match = line.match(/<(.+?)>; rel="(.+?)"/);
    if (match === null) {
      throw new Error('link is not valid string');
    }

    const { query } = new URL(match[1], true);
    return {
      url: match[1],
      type: match[2],
      num: Number(query.page),
    };
  });

  return matches.reduce(
    (acc, value) => ({
      ...acc,
      [value.type]: {
        url: value.url,
        num: value.num,
      },
    }),
    {},
  );
};
