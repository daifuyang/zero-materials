import React from 'react';

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
  extra?: React.ReactNode;
  /**
   * 自定义样式
   */
  style?: React.CSSProperties;
  className?: string;
  container?: string;
  forwardRef?: React.Ref<any>;
}

const Navbar: React.FC<NavbarProps> = function (props) {
  const { style, logo, menu, extra, className, container, forwardRef } = props;
  return (
    <nav
      ref={forwardRef}
      style={style}
      className={cx('zero-ui-navbar navbar navbar-expand-lg', { [className]: !!className })}
      
    >
      <div className={container}>
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
          {extra}
        </div>
      </div>
    </nav>
  );
};
Navbar.displayName = 'navbar';

export default Navbar;
