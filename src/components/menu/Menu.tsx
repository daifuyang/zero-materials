import React, { CSSProperties, FC } from 'react';

interface MenuProps {
  /**
   * 自定义样式
   */
  style?: CSSProperties;
}

const Menu: FC<MenuProps> = (props) => {
  const { style } = props;
  return (
    <ul style={style} className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
          Home
        </a>
      </li>
    </ul>
  );
};
export {
    Menu
};
