import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const RGLContainerMeta: ComponentMetadata = {
  componentName: 'RGLContainer',
  title: 'RGLContainer',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'ssr-materials',
    version: '0.1.0',
    exportName: 'RGLContainer',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [

    ],
    supports: {
      style: true,
    },
    component: {
      isContainer: true,
    },
    advanced: {
    },
  },
  experimental: {
    callbacks: {},
  },
};
const snippets: Snippet[] = [
  {
    title: 'RGLContainer',
    screenshot: '',
    schema: {
      componentName: 'RGLContainer',
      props: {},
      children: [],
    },
  },
];

export default {
  ...RGLContainerMeta,
  snippets,
};
