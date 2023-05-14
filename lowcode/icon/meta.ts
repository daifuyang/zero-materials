import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';
import { aos } from '../_utils/aos';

const Meta: ComponentMetadata = {
  componentName: "Icon",
  title: '图标',
  docUrl: '',
  screenshot:'',
  devMode: 'proCode',
  npm: {
    package: 'zero-materials',
    version: '0.1.0',
    exportName: "Icon",
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        name: 'icon',
        title: '图标',
        setter: 'StringSetter',
        defaultValue: "",
      },
      aos
    ],
    supports: {
      style: true,
      className: true,
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
    title: '图标',
    screenshot:
      'https://img.alicdn.com/imgextra/i1/O1CN01yR8vcY1M504YbHxzo_!!6000000001382-55-tps-56-56.svg',
    schema: {
      componentName: "Icon",
      props: {},
      children: [],
    },
  },
];

export default {
  ...Meta,
  snippets,
};
