import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';
import { MENU } from '../names';

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
        name: 'container',
        title: '容器宽度',
        setter: {
          componentName: 'SelectSetter',
          initialValue: 'container',
          props: {
            mode: 'single',
            options: [
              {
                title: '默认',
                value: 'container',
              },
              {
                title: '全屏',
                value: 'container-fluid',
              },
            ],
          },
        },
      },
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
                componentName: MENU,
                props: {
                  className: 'mr-auto',

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
        title: '其他菜单',
        name: 'extra',
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
                componentName: 'Div' ,
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
