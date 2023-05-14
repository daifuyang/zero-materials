import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const Meta: ComponentMetadata = {
  componentName: 'Row',
  title: '栅格一行',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'zero-materials',
    version: '0.1.0',
    exportName: 'Row',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    component: {
      isContainer: true,
      nestingRule: {
        childWhitelist: ['Col'],
      },
    },
    supports: {
      style: true,
      loop: false,
    },
    advanced: {},
  },
  experimental: {
    callbacks: {},
  },
  category: '容器',
  group: '组件',
};
const snippets: Snippet[] = [
  {
    title: '栅格一行',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/1-1.png',
    schema: {
      componentName: 'Row',
      props: {},
      children: [
        {
          componentName: 'Col',
          props: {
            lg: 6,
            md: 6,
            xs: 6,
          },
        },
        {
          componentName: 'Col',
          props: {
            lg: 6,
            md: 6,
            xs: 6,
          },
        },
      ],
    },
  },
];

export default {
  ...Meta,
  snippets,
};
