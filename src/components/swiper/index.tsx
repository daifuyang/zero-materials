import React, { CSSProperties } from 'react';
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
// import required modules
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectFade,
  EffectCube,
  EffectCoverflow,
  EffectFlip,
  EffectCards,
  EffectCreative,
} from 'swiper';

// Import Swiper styles
import { NavigationOptions, PaginationOptions } from 'swiper/types';

interface SwiperProps {
  style: CSSProperties;
  navigation?: NavigationOptions | boolean;
  pagination?: PaginationOptions | boolean;
  direction?: 'horizontal' | 'vertical';
  autoplay?: boolean;
  delay?: number;
  effect?: 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | 'creative' | 'cards';
  __designMode?: string;
}

const Swiper = (props: SwiperProps) => {
  const {
    style = {
      height: 300,
    },
    navigation,
    pagination,
    direction,
    autoplay,
    delay,
    effect,
    __designMode,
  } = props;

  const auto = autoplay
    ? {
        delay,
        disableOnInteraction: false,
      }
    : false;

  return (
    <SwiperReact
      allowTouchMove={__designMode !== 'design'}
      observer
      observeParents
      observeSlideChildren
      autoplay={auto}
      direction={direction}
      effect={effect}
      style={style}
      navigation={navigation}
      pagination={pagination}
      modules={[
        Autoplay,
        Navigation,
        Pagination,
        EffectFade,
        EffectCube,
        EffectCoverflow,
        EffectFlip,
        EffectCards,
        EffectCreative,
      ]}
    >
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
      </SwiperSlide>
    </SwiperReact>
  );
};

Swiper.displayName = 'swiper';

export default Swiper;
