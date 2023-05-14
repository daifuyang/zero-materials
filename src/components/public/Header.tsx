import React, { FC, ReactNode } from 'react';

import cx from 'classnames';

interface DivProps {
  type: string; // 公共区块类型
  style?: React.CSSProperties;
  className?: string;
  /**
   * 孩子节点
   */
  children?: ReactNode;
  forwardRef?: React.Ref<any>;
}

const Header: FC<DivProps> = (props: any) => {
  const { style, className, children, forwardRef } = props;

  return (
    <header
      ref={forwardRef}
      style={style}
      className={cx({
        [`zero-ui-header`]: true,
        [className]: !!className,
      })}
    >
      {children}
    </header>
  );
};

Header.displayName = 'Header';
export default Header;
