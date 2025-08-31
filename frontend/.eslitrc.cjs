// frontend/.eslintrc.cjs (例: あなたがReact 19を使用する場合の設定)
// ESlinter設定ファイル (使用しない場合は全文コメントアウトしてください)
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  // ★React 19を使用する場合、settings.react.version を明示的に指定
  settings: { react: { version: '19.0.0' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // 必要に応じてその他のカスタムルールを追加
  },
};