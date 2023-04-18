import React, { FC, ReactNode } from 'react';

import cx from 'classnames';

interface DivProps {
  type: string; // 公共区块类型
  className?: string;
  /**
   * 孩子节点
   */
  children?: ReactNode;
}

const Header: FC<DivProps> = (props: any) => {
  const { className, children, ...otherProps } = props;

  return (
    <header
      className={cx({
        [`zero-ui-header`]: true,
        [className]: !!className,
      })}
      {...otherProps}
    >
      {children}
    </header>
  );
};

Header.displayName = 'Header';
export default  Header;
