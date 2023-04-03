import React, { CSSProperties, FC } from 'react';

interface MenuProps {
  items: any;
  /**
   * 自定义样式
   */
  style?: CSSProperties;

}

const Menu: FC<MenuProps> = (props) => {
  const { style, items } = props;
  return (
    <ul style={style} className="navbar-nav me-auto mb-2 mb-lg-0">
      {items?.map((item: any) => {
        return (
          <li key={item.key} className="nav-item">
            <a className="nav-link active" aria-current="page" href={item.link}>
              {item.title}
            </a>
            {item.subMenu}
          </li>
        );
      })}
    </ul>
  );
};
Menu.displayName = 'Menu';
export { Menu };
