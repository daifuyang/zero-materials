import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const Meta: ComponentMetadata = {
  componentName: 'Form',
  title: '表单',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'zero-materials',
    version: '0.1.0',
    exportName: 'Form',
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
    title: '表单',
    screenshot:
      'https://img.alicdn.com/tfs/TB1oH02u2b2gK0jSZK9XXaEgFXa-112-64.png',
    schema: {
      componentName: 'Form',
      props: {},
      children: [],
    },
  },
];

export default {
  ...Meta,
  // snippets,
};
