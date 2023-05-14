const { name, version } = require('./package.json');
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
        engineScope: '@alilc',
        noParse: true,
        npmInfo: {
          package: name,
          version,
        },
        singleComponent: true,
        lowcodeDir: 'lowcode',
        entryPath: 'src/index.tsx',
        categories: ['基础', '数据', '容器', '导航'],
        builtinAssets: [
          {
            packages: [
              {
                package: 'moment',
                version: '2.24.0',
                urls: ['https://g.alicdn.com/mylib/moment/2.24.0/min/moment.min.js'],
                library: 'moment',
              },
              {
                package: 'lodash',
                library: '_',
                urls: ['https://g.alicdn.com/platform/c/lodash/4.6.1/lodash.min.js'],
              },
              {
                package: 'icon',
                library: '_',
                urls: ['//at.alicdn.com/t/c/font_3985289_s4clqvzrmkm.js'],
              },
              {
                package: '@ant-design/icons',
                version: '4.7.0',
                urls: [`//g.alicdn.com/code/npm/@ali/ant-design-icons-cdn/4.5.0/index.umd.min.js`],
                library: 'icons',
              },
              {
                package: 'bootstrap',
                version: '5.3.0',
                urls: [
                  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css',
                  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js',
                ],
                library: 'bootstrap',
              },
              {
                package: 'antd',
                version: '4.23.0',
                urls: [
                  '//g.alicdn.com/code/lib/antd/4.23.0/antd.min.js',
                  '//g.alicdn.com/code/lib/antd/4.23.0/antd.min.css',
                ],
                library: 'antd',
              },
              {
                package: 'form-materials',
                version: '0.1.0',
                library: 'FormMaterials',
                urls: [
                  '/materials/form/render/default/view.js',
                  '/materials/form/render/default/view.css',
                ],
                editUrls: ['/materials/form/view.js', '/materials/form/view.css'],
                advancedUrls: {
                  default: [
                    '/materials/form/render/default/view.js',
                    '/materials/form/render/default/view.css',
                  ],
                },
                advancedEditUrls: {},
              },
            ],
            components: [
              {
                exportName: 'FormMaterialsMeta',
                npm: {
                  package: 'form-materials',
                  version: '0.1.0',
                },
                url: '/materials/form/meta.js',
                urls: {
                  default: '/materials/form/meta.js',
                },
                advancedUrls: {
                  default: ['/materials/form/meta.js'],
                },
              },
            ],
          },
        ],
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
        openUrl: 'http://localhost:5556?debug',
      },
    ],
  ],
};
