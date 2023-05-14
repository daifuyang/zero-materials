import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';
import { aos } from '../_utils/aos';

const Meta: ComponentMetadata = {
  componentName: 'Span',
  title: '行内标签',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'zero-materials',
    version: '0.1.0',
    exportName: 'Span',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        name: 'children',
        title: {
          label: '内容',
          tip: '',
        },
        setter: 'StringSetter',
        defaultValue: 'span标签',
      },
      {
        name: 'depth',
        title: {
          label: 'depth',
          tip: '',
        },
        setter: 'StringSetter',
        defaultValue: '',
      },
      aos
    ],
    component: {
      isContainer: false,
    },
    supports: {
      className: true,
      style: true,
      events: [],
      loop: true,
    },
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
    title: '行内元素',
    screenshot: '',
    schema: {
      componentName: 'Span',
      props: {},
      children: [],
    },
  },
];

export default {
  ...Meta,
  snippets,
};
