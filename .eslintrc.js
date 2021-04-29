module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    // As of React v17, React import not needed
    'react/react-in-jsx-scope': 'off',

    // I prefer .js
    'react/jsx-filename-extension': 'off',

    'linebreak-style': 'off',

    'max-len': 'off',
  },
};
