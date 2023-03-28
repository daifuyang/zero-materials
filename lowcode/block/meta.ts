import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const Meta: ComponentMetadata = {
  componentName: "Block",
  title: '区块',
  docUrl: '',
  screenshot:
    '',
  devMode: 'proCode',
  npm: {
    package: 'zero-materials',
    version: '0.1.0',
    exportName: "Block",
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      
    ],
    supports: {
      style: true,
      loop: false,
    },
    component: {
      isContainer: true,
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
    title: '区块',
    screenshot:
      'https://img.alicdn.com/imgextra/i3/O1CN018CwRJM1ZkIpmeEfRD_!!6000000003232-55-tps-128-128.svg',
    schema: {
      componentName: "Block",
      props: {},
      children: [],
    },
  },
];

export default {
  ...Meta,
  snippets,
};
