import React, { CSSProperties, FC, Ref } from 'react';

import cx from 'classnames';
import { useAos } from '@/utils/utils';

interface IconProps {
  className?: string;
  /**
   * 自定义样式
   */
  style?: CSSProperties;
  /**
   * 孩子节点
   */
  icon: string;
  forwardRef?: Ref<any>;
  aos?: any;
}

const Icon: FC<IconProps> = (props) => {
  const { icon, className, style = {}, forwardRef } = props;
  const _style = style;
  if (_style?.color) {
    _style.fill = _style.color;
  }
  const [dataAos] = useAos(props);
  return (
    <svg
      {...dataAos}
      ref={forwardRef}
      style={_style}
      className={cx('icon', { [className]: !!className })}
      aria-hidden="true"
    >
      <use xlinkHref={`#${icon}`} />
    </svg>
  );
};
Icon.displayName = 'Icon';
export { Icon };
