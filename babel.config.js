// module.exports = {
//   presets: ['module:@react-native/babel-preset'],
//   plugins: [
//     'react-native-reanimated/plugin',
//   ],
// };
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      '@babel/plugin-transform-class-properties',
      {
        loose: true // Ensure the 'loose' mode is set to true
      }
    ],
    [
      '@babel/plugin-transform-private-methods',
      {
        loose: true // Ensure the 'loose' mode is set to true
      }
    ],
    [
      '@babel/plugin-transform-private-property-in-object',
      {
        loose: true // Ensure the 'loose' mode is set to true
      }
    ]
  ]
};




