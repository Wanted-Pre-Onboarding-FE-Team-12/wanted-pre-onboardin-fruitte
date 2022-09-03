const cracoAlias = require('craco-alias');
module.exports = {
  plugins: [
    {
      plugin: cracoAlias,
      options: {
        source: 'jsconfig',
        baseUrl: './',
        jsConfigPath: 'jsconfig.paths.json',
      },
    },
  ],
};
