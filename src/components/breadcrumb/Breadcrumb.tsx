import React, { FC } from 'react';

import cx from 'classnames';

interface BreadcrumbProps {
  /**
   * 孩子节点
   */
  items?: any;
  link?: keyof JSX.IntrinsicElements;
}

const renderItems = (props: any) => {
  const { items = [], link, __designMode, ...otherProps } = props;
  let Link: keyof JSX.IntrinsicElements = 'a';
  if (items?.length === 0 && __designMode) {
    return (
      <nav {...otherProps} aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="#">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="#">Library</Link>
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
          const _href = item.href;
          Link = 'a';
          if (link && !!_href) {
            Link = link;
          }
          return (
            <li
              key={item.key}
              className={
                cx('breadcrumb-item', { active: items.length - 1 === i })
                // eslint-disable-next-line react/no-danger
              }
            >
              <Link href={_href}>{item.title || '导航'}</Link>
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
