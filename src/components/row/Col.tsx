import React, { FC } from 'react';
import cx from 'classnames';

interface ColProps {
  className?: string;
  span?: Number;
  /**
   * 孩子节点
   */
  children?: React.ReactNode;
}

const Col: FC<ColProps> = (props) => {
  const {  children, span, className, ...otherProps } = props;

  return (
    <div className={cx(`col-${span}`, { [className]: !!className })} {...otherProps}>
      {children}
    </div>
  );
};

Col.displayName = 'Col';

export default Col;
