import React, { CSSProperties, FC } from 'react';

import cx from 'classnames';

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
}

const Icon: FC<IconProps> = (props) => {
  const { icon, className, style = {}, ...otherProps } = props;
  const _style = style;
  if (_style?.color) {
    _style.fill = _style.color;
  }
  return (
    <svg
      style={_style}
      className={cx('icon', { [className]: !!className })}
      {...otherProps}
      aria-hidden="true"
    >
      <use xlinkHref={`#${icon}`} />
    </svg>
  );
};
Icon.displayName = 'Icon'
export { Icon };
