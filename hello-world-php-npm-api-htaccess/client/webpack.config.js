const CopyWebpackPlugin = require('copy-webpack-plugin');

// issue: https://github.com/meltedspark/angular-builders/issues/235
// explanation: https://github.com/meltedspark/angular-builders/issues/235#issuecomment-464393504
// workaround: https://github.com/meltedspark/angular-builders/issues/235#issuecomment-471323007
module.exports = (config, options) => {
  config.plugins.push(
    process.env.NODE_ENV !== 'mock' ?
      new CopyWebpackPlugin([{
        from: '../server/src/main',
        to: './api',
      }]) : {},
  );
  return config;
}