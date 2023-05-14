import React, { FC, ReactNode } from 'react';

import cx from 'classnames';

interface FooterProps {
  type: string; // 公共区块类型
  style?: React.CSSProperties;
  className?: string;
  /**
   * 孩子节点
   */
  children?: ReactNode;
  forwardRef?: React.Ref<any>;
}

const Footer: FC<FooterProps> = (props: any) => {
  const { style, className, children, forwardRef } = props;

  return (
    <footer
      ref={forwardRef}
      style={style}
      className={cx({
        [`zero-ui-footer`]: true,
        [className]: !!className,
      })}
    >
      {children}
    </footer>
  );
};

Footer.displayName = 'Footer';
export default Footer;
