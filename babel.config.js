module.exports = {
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }],
      '@babel/preset-react',  // Only if using React
      '@babel/preset-typescript',  // Only if using TypeScript
    ],
  };