module.exports = {
  root: true,
  extends: [
    'plugin:vue/strongly-recommended',
    'standard',
  ],
  parserOptions: {
    'ecmaVersion': 10
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
  },
}
