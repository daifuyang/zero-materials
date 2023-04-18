import React, { CSSProperties, FC } from 'react';

import cx from 'classnames';

interface MenuProps {
  items: any;
  link?: keyof JSX.IntrinsicElements;
  className?: string;
  /**
   * 自定义样式
   */
  color?: CSSProperties;
  hoverColor?: CSSProperties;
  bgColor?: CSSProperties;
  hoverBgColor?: CSSProperties;
  fontSize?: number;
  style?: CSSProperties;
  __designMode?: string;
}

const Menu: FC<MenuProps> = (props) => {
  const {
    link,
    color = '#000000',
    hoverColor = '#1677ff',
    bgColor = undefined,
    hoverBgColor = undefined,
    fontSize = 20,
    style = {},
    className = undefined,
    items = [],
    __designMode,
  } = props;

  const _style = {
    ...style,
    '--nav-color': color,
    '--nav-hover-color': hoverColor,
    '--nav-bg-color': bgColor,
    '--nav-hover-bg-color': hoverBgColor,
    '--fontSize': fontSize,
  };

  let Link: keyof JSX.IntrinsicElements = 'a';
 
  const renderSubItem = (menu: any = []) => {
    if (menu && menu?.length === 0) {
      return null;
    }
    const render = menu?.map((item: any = {}) => {
      const { children = [] } = item;
      let _href = item.href;
      if (__designMode) {
        _href = undefined;
      }
      if (link && !! _href) {
        Link = link;
      }
      return (
        <li key={item.id} className="nav-item">
          <Link className="nav-link" aria-current="page" href={_href}>
            {item.name}
          </Link>
          <ul className="sub-menu">{renderSubItem(children)}</ul>
        </li>
      );
    });
    return render;
  };

  let render: any = renderSubItem(items);

  if (items?.length === 0 && __designMode) {
    render = (
      <>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="#">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">
            Link
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" href="#">
                Action
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="#">
                Another action
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" href="#">
                Something else here
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled">Disabled</Link>
        </li>
      </>
    );
  }

  return (
    <ul style={_style} className={cx('zero-ui-navbar navbar-nav', { [className]: !!className })}>
      {render}
    </ul>
  );
};
Menu.displayName = 'Menu';
export { Menu };
