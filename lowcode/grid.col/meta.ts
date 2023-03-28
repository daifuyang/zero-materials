import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const Meta: ComponentMetadata = {
  componentName: 'Col',
  title: '栅格一列',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'zero-materials',
    version: '0.1.0',
    exportName: 'Col',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        name: 'span',
        title: {
          label: '占位格数',
        },
        setter: 'StringSetter',
        defaultValue: '6',
      },
    ],
    component: { isContainer: true, nestingRule: { parentWhitelist: ['Row'] } },
    supports: { style: true },
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
    title: '栅格',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/1-1.png',
    schema: {
      componentName: 'Col',
      props: {},
      children: [],
    },
  },
];

export default {
  ...Meta,
  // snippets,
};
