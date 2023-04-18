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

const Section: FC<DivProps> = (props: any) => {
  const { className, children, ...otherProps } = props;

  return (
    <section
      className={cx({
        [`zero-ui-section`]: true,
        [className]: !!className,
      })}
      {...otherProps}
    >
      {children}
    </section>
  );
};

Section.displayName = 'Section';
export default Section
