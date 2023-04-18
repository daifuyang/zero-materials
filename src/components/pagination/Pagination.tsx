import * as React from 'react';
import { createElement, cloneElement } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import cx from 'classnames';

export interface IPaginationProps {
  link?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
  current: number;
  pageSize: number;
  total: number;
  href?: string;
  __designMode?: string;
}

const Pagination: React.FC<IPaginationProps> = (props) => {
  const {
    current = 1,
    pageSize = 10,
    total = 0,
    className,
    href,
    __designMode,
    link,
    ...otherProps
  } = props;

  const pageBufferSize = 2;
  // 总分页
  const allPages = Math.floor((total - 1) / pageSize) + 1;
  const prevPage: any = current - 1 > 0 ? current - 1 : 0;
  const nextPage: any = current + 1 < allPages ? current + 1 : allPages;
  const pageSufix = 'page-';

  // 存在上一页
  const hasPrev = () => current > 1;
  const renderPrev = () => {
    let Link: keyof JSX.IntrinsicElements = 'a';
    const disabled = !hasPrev();
    let _href: any;
    if (!disabled) {
      _href = `${href}/${pageSufix}${prevPage}`;
    }
    if (__designMode) {
      _href = undefined;
    }

    if (link && !!_href) {
      Link = link;
    }

    return (
      <li
        className={cx({
          'page-item': true,
          disabled,
        })}
      >
        <Link href={_href} className="page-link page-prev">
          <LeftOutlined />
        </Link>
      </li>
    );
  };

  // 存在下一页
  const hasNext = () => current < allPages;
  const renderNext = () => {
    const disabled = !hasNext();
    let Link: keyof JSX.IntrinsicElements = 'a';
    let _href: any;
    if (!disabled) {
      _href = `${href}/${pageSufix}${nextPage}`;
    }

    if (__designMode) {
      _href = undefined;
    }

    if (link && !!_href) {
      Link = link;
    }

    return (
      <li
        className={cx({
          'page-item': true,
          disabled,
        })}
      >
        <Link href={_href} className="page-link page-next">
          <RightOutlined />
        </Link>
      </li>
    );
  };

  const renderPager = () => {
    const pagerList = [];
    if (allPages <= 3 + pageBufferSize * 2) {
      if (!allPages) {
        let Link: keyof JSX.IntrinsicElements = 'a';
        let _href: any = `${href}/${pageSufix}1`;
        if (__designMode) {
          _href = undefined;
        }

        if (link && !!_href) {
          Link = link;
        }

        const frstPager = (
          <li key="noPager" className="page-item">
            <Link className="page-link" href={_href}>
              1
            </Link>
          </li>
        );
        if (frstPager) {
          pagerList.push(frstPager);
        }
      }
      for (let i = 1; i <= allPages; i += 1) {
        let Link: keyof JSX.IntrinsicElements = 'a';
        const active = current === i;
        let _href: any = `${href}/${pageSufix}${i}`;
        if (__designMode) {
          _href = undefined;
        }

        if (link && !!_href) {
          Link = link;
        }

        const pager = (
          <li
            className={cx({
              'page-item': true,
              active,
            })}
            key={i}
          >
            <Link className="page-link" href={_href}>
              {i}
            </Link>
          </li>
        );

        if (pager) {
          pagerList.push(pager);
        }
      }
    } else {
      /* 分页超过7页变成动态分页 */

      const jumpPrev = (
        <li key="prev" className="page-item page-item-jump-prev">
          <span className="page-link" key="next">
            ···
          </span>
        </li>
      );

      const jumpNext = (
        <li key="next" className="page-item page-item-jump-prev">
          <span className="page-link" key="next">
            ···
          </span>
        </li>
      );

      let Link: keyof JSX.IntrinsicElements = 'a';

      let _href: any = `${href}/${pageSufix}${allPages}`;
      if (__designMode) {
        _href = undefined;
      }

      if (link && !!_href) {
        Link = link;
      }

      const lastPager: any = (
        <li
          className={cx({
            'page-item': true,
          })}
          key={allPages}
        >
          <Link key="noPager" className="page-link" href={_href}>
            {allPages}
          </Link>
        </li>
      );

      _href = `${href}/${pageSufix}1`;
      if (__designMode) {
        _href = undefined;
      }

      if (link && !!_href) {
        Link = link;
      }

      const firstPager: any = (
        <li
          className={cx({
            'page-item': true,
          })}
          key={1}
        >
          <Link key="1" className="page-link" href={`${_href}`}>
            {1}
          </Link>
        </li>
      );

      let left = Math.max(1, current - pageBufferSize);
      let right = Math.min(current + pageBufferSize, allPages);

      if (current - 1 <= pageBufferSize) {
        right = 1 + pageBufferSize * 2;
      }

      if (allPages - current <= pageBufferSize) {
        left = allPages - pageBufferSize * 2;
      }

      for (let i = left; i <= right; i += 1) {
        const active = current === i;
        _href = `${href}/${pageSufix}${i}`;
        if (__designMode) {
          _href = undefined;
        }

        if (link && !!_href) {
          Link = link;
        }

        const pager = (
          <li
            className={cx({
              'page-item': true,
              active,
            })}
            key={i}
          >
            <Link key={i} className="page-link" href={_href}>
              {i}
            </Link>
          </li>
        );

        if (pager) {
          pagerList.push(pager);
        }
      }

      if (current - 1 >= pageBufferSize * 2 && current !== 1 + 2) {
        pagerList[0] = cloneElement(pagerList[0], {
          className: `page-item page-item-after-jump-prev`,
        });
        pagerList.unshift(jumpPrev);
      }

      if (allPages - current >= pageBufferSize * 2 && current !== allPages - 2) {
        pagerList[pagerList.length - 1] = cloneElement(pagerList[pagerList.length - 1], {
          className: `page-item page-item-before-jump-next`,
        });
        pagerList.push(jumpNext);
      }

      if (left !== 1 && firstPager) {
        pagerList.unshift(firstPager);
      }
      if (right !== allPages && lastPager) {
        pagerList.push(lastPager);
      }
    }
    return pagerList;
  };

  return (
    <nav
      className={cx({
        'zero-ui-pagination': true,
        [className]: !!className,
      })}
      aria-label="list results pages"
      {...otherProps}
    >
      <ul className="pagination">
        {renderPrev()}
        {renderPager()}
        {renderNext()}
      </ul>
    </nav>
  );
};
export { Pagination };
