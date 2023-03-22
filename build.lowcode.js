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
    [
      '@alilc/build-plugin-alt',
      {
        type: 'component',
        inject: true,
        library,
        // 配置要打开的页面，在注入调试模式下，不配置此项的话不会打开浏览器
        // 支持直接使用官方 demo 项目：https://lowcode-engine.cn/demo/index.html
        openUrl: "http://localhost:5556?debug"
      }
    ],
  ],
};
