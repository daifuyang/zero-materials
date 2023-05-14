import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';
import { aos } from '../_utils/aos';

const Meta: ComponentMetadata = {
  componentName: 'Div',
  title: '区块',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'zero-materials',
    version: '0.1.0',
    exportName: 'Div',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      aos
    ],
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
  group: '组件',
};
const snippets: Snippet[] = [
  {
    title: '区块',
    screenshot:
      'https://img.alicdn.com/imgextra/i3/O1CN018CwRJM1ZkIpmeEfRD_!!6000000003232-55-tps-128-128.svg',
    schema: {
      componentName: 'Div',
      props: {},
      children: [],
    },
  },
];

export default {
  ...Meta,
  snippets,
};
