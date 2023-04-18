import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const Meta: ComponentMetadata = {
  componentName: 'Pagination',
  title: '分页',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'zero-materials',
    version: '0.1.0',
    exportName: 'Pagination',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        name: 'current',
        title: {
          label: '当前页数',
        },
        setter: 'StringSetter',
        defaultValue: '1',
      },
      {
        name: 'pageSize',
        title: {
          label: '每页条数',
        },
        setter: 'StringSetter',
        defaultValue: '10',
      },
      {
        name: 'total',
        title: {
          label: '数据总数',
        },
        setter: 'StringSetter',
        defaultValue: '0',
      },
      {
        name: 'href',
        title: {
          label: '跳转链接',
        },
        setter: 'StringSetter',
        defaultValue: '',
      },
    ],
    component: {
      
    },
    supports: {
      className: true,
      style: true,
      loop: false,
    },
    advanced: {},
  },
  experimental: {
    callbacks: {},
  },
  category: '导航',
  group: '组件',
};
const snippets: Snippet[] = [
  {
    title: '分页',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_pagination.png',
    schema: {
      componentName: 'Pagination',
      props: {},
      children: [],
    },
  },
];

export default {
  ...Meta,
  snippets,
};
