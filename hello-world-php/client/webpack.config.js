const CopyWebpackPlugin = require('copy-webpack-plugin');

const invertedMode = process.env.NODE_ENV === 'prod' ? 'dev' : 'prod';
module.exports = {
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{
        from: '../server',
        to: './server',
        globOptions: {
          ignore: ['**/config.default.php', `**/config.${invertedMode}.php`, '**/README.md'],
        },
      }],
    }),
  ],
}
