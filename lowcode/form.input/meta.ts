import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const Meta: ComponentMetadata = {
  componentName: 'Input',
  title: '输入框',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'zero-materials',
    version: '0.1.0',
    exportName: 'Input',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [],
    component: {
      isContainer: true,
    },
    supports: {
      className: true,
      style: true,
      events: [
        {
          name: 'onClick',
        }
      ],
      loop: true,
    },
    advanced: {},
  },
  experimental: {
    callbacks: {},
  },
  category: '容器',
  group: '表单',
};
const snippets: Snippet[] = [
  {
    title: '输入框',
    screenshot:
      'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/input-1.png',
    schema: {
      componentName: 'Input',
      props: {},
      children: [],
    },
  },
];

export default {
  ...Meta,
  // snippets,
};
