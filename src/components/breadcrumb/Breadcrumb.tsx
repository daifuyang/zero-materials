import React, { FC } from 'react';

import cx from 'classnames';

interface BreadcrumbProps {
  /**
   * 孩子节点
   */
  items?: any;
}

const renderItems = (props: any) => {
  const { items = [], ...otherProps } = props;
  if (items?.length === 0) {
    return (
      <nav {...otherProps} aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Library</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Data
          </li>
        </ol>
      </nav>
    );
  }
  return (
    <nav {...otherProps} aria-label="breadcrumb">
      <ol className="breadcrumb">
        {items.map((item: any = {}, i: number) => {
          return (
            <li
              key={item.key}
              className={
                cx('breadcrumb-item', { active: items.length - 1 === i })
                // eslint-disable-next-line react/no-danger
              }
            >
              <a href={item.href}>{item.title || '导航'}</a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

const Breadcrumb: FC<BreadcrumbProps> = (props) => {
  return renderItems(props);
};

Breadcrumb.displayName = 'Breadcrumb';
export { Breadcrumb };
