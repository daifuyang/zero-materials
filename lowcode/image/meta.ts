import { aos } from '../_utils/aos';

const Meta = {
  componentName: "Image",
  title: '图片',
  docUrl: '',
  screenshot:
    'https://img.alicdn.com/imgextra/i3/O1CN01tnhXhk1GUIFhsXwzA_!!6000000000625-55-tps-56-56.svg',
  devMode: 'proCode',
  npm: {
    package: 'zero-materials',
    version: '0.1.0',
    exportName: "Image",
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        name: 'src',
        title: {
          label: '图片链接',
        },
        setter: 'StringSetter',
        defaultValue: "https://img.alicdn.com/tps/TB16TQvOXXXXXbiaFXXXXXXXXXX-120-120.svg",
      },
      {
        name: 'alt',
        title: '替代文本',
        setter: 'StringSetter',
        defaultValue: "alt",
       
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
const snippets = [
  {
    title: '图片',
    screenshot:
      'https://img.alicdn.com/imgextra/i3/O1CN01tnhXhk1GUIFhsXwzA_!!6000000000625-55-tps-56-56.svg',
    schema: {
      componentName: "Image",
      props: {},
      children: [],
    },
  },
];

export default {
  ...Meta,
  snippets,
};
