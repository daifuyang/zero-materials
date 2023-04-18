import React from 'react';

interface LinkProps {
  link?: keyof JSX.IntrinsicElements;
  href?: string;
  rel?: string;
  target: '_self' | '_blank' | '_parent' | '_top';
  style: React.CSSProperties;
  /**
   * 孩子节点
   */
  children?: React.ReactNode;
  __designMode?: string;
}

const Link: React.FC<LinkProps> = (props) => {
  const {
    link,
    href,
    children = '默认链接',
    style = { color: '#1677ff' },
    target,
    ...otherProps
  } = props;

  let _href = href;

  if (props.__designMode) {
    _href = undefined;
  }

  let LinkRender: keyof JSX.IntrinsicElements = 'a';
  if (link && !! _href) {
    LinkRender = link;
  }

  return (
    <LinkRender href={_href} style={style} {...otherProps}>
      {children}
    </LinkRender>
  );
};
Link.displayName = 'Link';
export default Link;
