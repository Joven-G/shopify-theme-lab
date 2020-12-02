module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  plugins: [
    'vue'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  env: {
    node: true,
    commonjs: true,
    browser: true,
    es6: true
  },
  rules: {
    /**
     * add custom rules
     * docs: https://eslint.org/docs/rules
     */
    // 'quotes': ['error', 'single'],
    // 'semi': ['error', 'never']
  }
}