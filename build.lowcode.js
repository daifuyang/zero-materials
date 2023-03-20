const { library } = require('./build.json');

module.exports = {
  alias: {
    '@': './src',
  },
  plugins: [
    [
      '@alifd/build-plugin-lowcode',
      {
        library,
        engineScope: "@alilc",
        staticResources: {
          engineCoreCssUrl:
            'https://uipaas-assets.com/prod/npm/@alilc/lowcode-engine/1.1.4-beta.2/dist/css/engine-core.css',
          engineExtCssUrl:
            'https://uipaas-assets.com/prod/npm/@alilc/lowcode-engine-ext/1.0.5/dist/css/engine-ext.css',
          engineCoreJsUrl:
            'https://uipaas-assets.com/prod/npm/@alilc/lowcode-engine/1.1.4-beta.2/dist/js/engine-core.js',
          engineExtJsUrl:
            'https://uipaas-assets.com/prod/npm/@alilc/lowcode-engine-ext/1.0.5/dist/js/engine-ext.js',
        },
        noParse: true,
        singleComponent: true,
      },
    ],
  ],
};
