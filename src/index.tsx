import { version } from '../package.json';

export { default as RGLContainer } from './components/RGLContainer';
export { default as Container } from './components/container';
export { default as Navbar } from './components/navbar';
export { default as Swiper } from './components/swiper';

export { Title, Text, Link } from './components/typography';

export { Row,Col } from './components/row';

export * from './components/button';
export * from './components/image';
export * from './components/menu';
export * from './components/block';

export * from './variables';

const bizCssPrefix = 'zero-ui';
const displayName = 'ZeroUi';

export { bizCssPrefix, displayName, version };
