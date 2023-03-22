import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const ContainerMeta: ComponentMetadata = {
  componentName: "Container",
  title: "容器",
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'ssr-materials',
    version: '0.1.0',
    exportName: "Container",
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        name: 'className',
        title: '宽度',
        setter: {
          componentName: 'SelectSetter',
          initialValue: 'container',
          props: {
            mode:'single',
            options: [
              {
                title: '默认',
                value: 'container',
              },
              // {
              //   title: 'md',
              //   value: 'container-md',
              // },
              // {
              //   title: 'lg',
              //   value: 'container-lg',
              // },
              // {
              //   title: 'xl',
              //   value: 'container-xl',
              // },
              // {
              //   title: 'xxl',
              //   value: 'container-xxl',
              // },
              {
                title: '全屏',
                value: 'container-fluid',
              },
            ]
          },
        }
      },
      {
        name: 'absolute',
        title: {
          label: '自由布局',
          tip: '开启自由布局',
        },
        setter: 'BoolSetter',
        defaultValue: false,
      },
    ],
    supports: {
      style: true,
      loop:false,
    },
    component: {
      isContainer: true,
    },
    advanced: {},
  },
  experimental: {
    callbacks: {},
  },
};
const snippets: Snippet[] = [
  {
    title: '容器',
    screenshot: 'https://img.alicdn.com/imgextra/i2/O1CN01B1NMW926IFrFxjqQT_!!6000000007638-55-tps-56-56.svg',
    schema: {
      componentName: "Container",
      props: {},
      children: [],
    },
  },
];

export default {
  ...ContainerMeta,
  snippets,
};
