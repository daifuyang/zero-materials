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
  className?: string;
  navigation?: NavigationOptions | boolean;
  pagination?: PaginationOptions | boolean;
  direction?: 'horizontal' | 'vertical';
  autoplay?: boolean;
  delay?: number;
  items: any;
  effect?: 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | 'creative' | 'cards';
  __designMode?: string;
  forwardRef?: React.Ref<any>;
}

const Swiper = (props: SwiperProps) => {
  const {
    style = {
      height: 300,
    },
    className,
    items = [],
    navigation,
    pagination,
    direction,
    autoplay,
    delay,
    effect,
    __designMode,
    forwardRef
  } = props;

  const auto = autoplay
    ? {
        delay,
        disableOnInteraction: false,
      }
    : false;

  return (
    <>
      {items?.length === 0 && <div style={{...style,display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid #999'}}>请选择一个轮播图</div>}
      {items?.length > 0 && (
        <SwiperReact
          ref={forwardRef}
          className={className}
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
          {items.map((item: any = {}, key: number) => {
            return (
              <SwiperSlide key={key}>
                <img src={item.src || 'https://swiperjs.com/demos/images/nature-1.jpg'} />
              </SwiperSlide>
            )
          })}
        </SwiperReact>
      )}
    </>
  );
};

Swiper.displayName = 'swiper';

export default Swiper;
