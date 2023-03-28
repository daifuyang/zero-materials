import React, { CSSProperties } from 'react';

import cx from 'classnames';

interface NavbarProps {
  /**
   * logo
   */
  logo?: React.ReactNode;
  /**
   * 菜单
   */
  menu?: React.ReactNode;
  /**
   * 自定义样式
   */
  style?: CSSProperties;
  className?: string;
}

const Navbar: React.FC<NavbarProps> = function (props) {
  const { style, logo, menu, className } = props;

  return (
    <nav
      style={style}
      className={cx('navbar navbar-expand-lg bg-body-tertiary', { [className]: !!className })}
    >
      <div className="container-fluid">
        <div className="logo">{logo}</div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          {menu}

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
Navbar.displayName = 'navbar';

export default Navbar;
