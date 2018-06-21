const path = require('path');
const slsw = require('serverless-webpack');

module.exports = {
  mode: 'development',
  entry: slsw.lib.entries,
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'imports-loader?graphql',
          {
            loader: 'babel-loader',
            options: {
              presets: [['latest', { targets: { node: '8.10' } }]],
              plugins: ["transform-object-rest-spread"]
            },
          },
        ],
      },
    ],
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  resolve: {
    alias: {
      handlers: path.resolve(__dirname, 'src', 'handlers'),
      models: path.resolve(__dirname, 'src', 'models'),
      resolvers: path.resolve(__dirname, 'src', 'resolvers'),
      schema: path.resolve(__dirname, 'src', 'schema'),
      types: path.resolve(__dirname, 'src', 'types'),
      utils: path.resolve(__dirname, 'src', 'utils')
    }
  },
};
