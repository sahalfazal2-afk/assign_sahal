module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@images': './src/assets/images',
          '@assets': './src/assets',
          '@shared': './src/components/shared',
          '@static': './src/components/static',
          '@listing': './src/components/listing',
          '@components': './src/components',
          '@core': './src/core',
          '@helpers': './src/helpers',
          '@hooks': './src/hooks',
          '@navigations': './src/navigations',
          '@screens': './src/screens',
          '@services': './src/services',
          '@metrics': './src/utils/metrics',
          '@yupSchemas': './src/utils/yupSchemas',
          '@utils': './src/utils',
        },
      },
    ],

    // 🧠 IMPORTANT:
    // Official React Native Reanimated docs say this must be LAST in the array.
    'react-native-reanimated/plugin',
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
