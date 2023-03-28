import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const NavbarMeta: ComponentMetadata = {
  componentName: 'Navbar',
  title: '导航栏',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'zero-materials',
    version: '0.1.0',
    exportName: 'Navbar',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        title: 'logo',
        name: 'logo',
        setter: {
          componentName: 'SlotSetter',
          props: {
            mode: 'node',
          },
          isRequired: true,
          initialValue: {
            type: 'JSSlot',
            value: [
              {
                componentName: 'Image',
                props: {
                  src: 'https://img.alicdn.com/tps/TB16TQvOXXXXXbiaFXXXXXXXXXX-120-120.svg',
                  alt: 'alt',
                  style: {
                    width: 100,
                    height: 50,
                  },
                },
                hidden: false,
                title: '',
                isLocked: false,
                condition: true,
                conditionGroup: '',
              },
            ],
          },
        },
      },
      {
        title: 'menu',
        name: 'menu',
        setter: {
          componentName: 'SlotSetter',
          props: {
            mode: 'node',
          },
          isRequired: true,
          initialValue: {
            type: 'JSSlot',
            value: [
              {
                componentName: 'Menu',
                props: {
                 
                },
                hidden: false,
                title: '',
                isLocked: false,
                condition: true,
                conditionGroup: '',
              },
            ],
          },
        },
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
  category: '导航',
  group: '组件',
};
const snippets: Snippet[] = [
  {
    title: '导航栏',
    screenshot: '',
    schema: {
      componentName: 'Navbar',
      props: {},
      children: [],
    },
  },
];

export default {
  ...NavbarMeta,
  snippets,
};
