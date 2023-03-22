import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const SwiperMeta: ComponentMetadata = {
  componentName: "Swiper",
  title: '轮播图',
  docUrl: '',
  screenshot:
    'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_slider.png',
  devMode: 'proCode',
  npm: {
    package: 'ssr-materials',
    version: '0.1.0',
    exportName: "Swiper",
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        name: 'autoplay',
        title: {
          label: '自动切换',
          tip: '自动切换开启，默认停留三秒',
        },
        setter: 'BoolSetter',
        defaultValue: true,
      },
      {
        name: 'effect',
        title: {
          label: '切换效果',
          tip: '设置Slide的切换效果，默认为"slide"（普通位移切换）',
        },
        setter: {
          componentName: 'SelectSetter',
          initialValue: 'slide',
          props: {
            mode:'single',
            options: [
              {
                title: '普通',
                value: 'slide',
              },
              {
                title: '淡入',
                value: 'fade',
              },
              {
                title: '方块',
                value: 'cube',
              },
              {
                title: '3d流',
                value: 'coverflow',
              },
              {
                title: 'flip',
                value: '3d翻转',
              },
              {
                title: 'cards',
                value: '卡片式',
              },
              {
                title: 'creative',
                value: '创意性',
              }
            ]
          },
        }
      },
      {
        name: 'delay',
        title: {
          label: '时间间隔',
          tip: '自动切换的时间间隔，单位ms',
        },
        setter: 'NumberSetter',
        defaultValue: 3000,
      },
      {
        name: 'navigation',
        title: {
          label: '显示导航',
          tip: '显示左右切换的箭头',
        },
        setter: 'BoolSetter',
        defaultValue: true,
      },
      {
        name: 'pagination',
        title: {
          label: '显示分页',
          tip: '显示分页指示器',
        },
        setter: 'BoolSetter',
        defaultValue: true,
      },
      {
        name: 'direction',
        title: {
          label: '方向',
          tip: '滚动方向',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          initialValue: 'horizontal',
          props: {
            options: [
              { title: '水平', value: 'horizontal' },
              { title: '垂直', value: 'vertical' },
            ],
          },
        }
      },
    ],
    supports: {
      style: true,
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
    title: '轮播图',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_slider.png',
    schema: {
      componentName: "Swiper",
      props: {},
      children: [],
    },
  },
];

export default {
  ...SwiperMeta,
  snippets,
};
