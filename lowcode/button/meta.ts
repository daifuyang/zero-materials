import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const Meta: ComponentMetadata = {
  componentName: "Button",
  title: '按钮',
  docUrl: '',
  screenshot:
    '',
  devMode: 'proCode',
  npm: {
    package: 'zero-materials',
    version: '0.1.0',
    exportName: "Button",
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        name: 'title',
        title: {
          label: '标题',
          tip: '按钮显示的标题',
        },
        setter: 'StringSetter',
        defaultValue: "按钮",
      },
      {
        name: 'styles',
        title: '样式',
        setter: {
          componentName: 'SelectSetter',
          initialValue: 'btn-primary',
          props: {
            mode:'single',
            options: [
              {
                title: '链接',
                value: 'btn-link',
              },
              {
                title: 'primary',
                value: 'btn-primary',
              },
              {
                title: 'secondary',
                value: 'btn-secondary',
              },
              {
                title: 'success',
                value: 'btn-success',
              },
              {
                title: 'danger',
                value: 'btn-danger',
              },
              {
                title: 'warning',
                value: 'btn-warning',
              },
              {
                title: 'info',
                value: 'btn-info',
              },
              {
                title: 'light',
                value: 'btn-light',
              },
              {
                title: 'dark',
                value: 'btn-dark',
              },
            ]
          },
        }
      },

    ],
    supports: {
      className: true,
      style: true,
      loop: false,
    },
    component: {},
    advanced: {},
  },
  experimental: {
    callbacks: {},
  },
  category: '基础',
  group: '组件',
};
const snippets: Snippet[] = [
  {
    title: '按钮',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_button.png',
    schema: {
      componentName: "Button",
      props: {},
      children: [],
    },
  },
];

export default {
  ...Meta,
  snippets,
};
