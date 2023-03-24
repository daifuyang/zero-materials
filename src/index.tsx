import { version } from '../package.json';

export { default as RGLContainer } from './components/RGLContainer';
export { default as Container } from './components/container';
export { default as Navbar } from './components/navbar';
export { default as Swiper } from './components/swiper';

export { Title } from './components/typography';


export * from './components/button';
export * from './components/Image';
export * from './variables';

const bizCssPrefix = 'zero-ui';
const displayName = 'ZeroUi';

export { bizCssPrefix, displayName, version };
