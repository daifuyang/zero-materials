import React, { FC, CSSProperties } from 'react';
import cx from 'classnames';

interface ColProps {
  /**
   * 自定义样式
   */
  style?: CSSProperties;
  className?: string;
  span?: Number;
  /**
   * 孩子节点
   */
  children?: React.ReactNode;
}

const Col: FC<ColProps> = (props) => {
  const { style, children, span, className, ...otherProps } = props;

  return (
    <div style={style} className={cx(`col-${span}`, { [className]: !!className })} {...otherProps}>
      {children}
    </div>
  );
};

Col.displayName = 'Col';

export default Col;
