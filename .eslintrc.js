module.exports = {
  extends: 'airbnb-base',

  // setting for test files
  overrides: [
    {
      files: [
        '**/*.spec.js',
      ],
      env: {
        jest: true,
      },
      plugins: ['jest'],
      globals: {
        jasmine: true
      },
    },
  ],
};
