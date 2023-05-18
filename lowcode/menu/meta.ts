import { MENU } from '../names';

const Meta = {
  componentName: MENU,
  title: '导航菜单',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'zero-materials',
    version: '0.1.0',
    exportName: 'ZUiMenu',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        name: 'items',
        title: '菜单项',
        setter: 'JsonSetter',
      },
      {
        name: 'fontSize',
        title: {
          label: '字体大小',
          tip: '菜单字体大小，单位px',
        },
        setter: 'NumberSetter',
        defaultValue: '16',
      },
      {
        name: 'color',
        title: {
          label: '字体颜色',
          tip: '菜单字体颜色',
        },
        setter: 'ColorSetter',
        defaultValue: '#000000',
      },
      {
        name: 'hoverColor',
        title: {
          label: '字体悬浮颜色',
          tip: '菜单字体悬浮颜色',
        },
        setter: 'ColorSetter',
        defaultValue: '#1677ff',
      },
      {
        name: 'bgColor',
        title: {
          label: '背景颜色',
          tip: '菜单背景颜色',
        },
        setter: 'ColorSetter',
        defaultValue: '',
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
  category: '导航',
  group: '组件',
};
const snippets = [
  {
    title: '导航菜单',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/menu-1.jpg',
    schema: {
      componentName: MENU,
      props: {},
      children: [],
    },
  },
];

export default {
  ...Meta,
  snippets,
};
