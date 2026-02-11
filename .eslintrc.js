module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['react-native'],
  rules: {
    // Warn if a style defined in StyleSheet.create() is never used
    'react-native/no-unused-styles': 'warn',

    // (Optional) Warn about missing keys in flat lists
    // 'react-native/split-platform-components': 'off',
    // 'react-native/no-inline-styles': 'off', // you can enable if you want stricter styling
  },
};
