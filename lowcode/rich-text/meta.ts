import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const Meta: ComponentMetadata = {
  componentName: 'RichText',
  title: '富文本',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'zero-materials',
    version: '0.1.0',
    exportName: 'RichText',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        name: 'html',
        title: '内容',
        description: '高级',
        display: 'block',
        setter: 'EditSetter',
      },
    ],
    supports: {
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
    title: '富文本',
    screenshot:
      'https://img.alicdn.com/imgextra/i3/O1CN01G7Lc8e1pZL7p4cdKc_!!6000000005374-2-tps-112-112.png',
    schema: {
      componentName: 'RichText',
      props: {},
      children: [],
    },
  },
];

export default {
  ...Meta,
  snippets,
};
