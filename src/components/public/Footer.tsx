import React, { FC, ReactNode } from 'react';

import cx from 'classnames';

interface FooterProps {
  type: string; // 公共区块类型
  className?: string;
  /**
   * 孩子节点
   */
  children?: ReactNode;
}

const Footer: FC<FooterProps> = (props: any) => {
  const { className, children, ...otherProps } = props;

  return (
    <footer
      className={cx({
        [`zero-ui-footer`]: true,
        [className]: !!className,
      })}
      {...otherProps}
    >
      {children}
    </footer>
  );
};

Footer.displayName = 'Footer';
export default  Footer;
