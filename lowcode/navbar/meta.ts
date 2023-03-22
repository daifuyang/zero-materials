import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const NavbarMeta: ComponentMetadata = {
  componentName: "Navbar",
  title: '导航栏',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'ssr-materials',
    version: '0.1.0',
    exportName: "Navbar",
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [],
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
};
const snippets: Snippet[] = [
  {
    title: '导航栏',
    screenshot: '',
    schema: {
      componentName: "Navbar",
      props: {},
      children: [],
    },
  },
];

export default {
  ...NavbarMeta,
  snippets,
};
