var path = require('path');

var SftpWebpackPlugin = require('sftp-webpack-plugin');

module.exports = {
  entry: './js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  watch: true,
 /* plugins: [new SftpWebpackPlugin({
    port: '22',
    host: 'ftp.studio100-com-ua.1gb.ua',
    username: 'w_studio100-com-ua_6e83743e',
    password: '44fed25b',
    from: path.resolve(__dirname, 'dist'),
    to: './http/test/'
  })]*/
};