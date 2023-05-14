import { useAos } from '@/utils/utils';
import React from 'react';

interface LinkProps {
  link?: keyof JSX.IntrinsicElements;
  href?: string;
  target: '_self' | '_blank' | '_parent' | '_top';
  style: React.CSSProperties;
  className?: string;
  /**
   * 孩子节点
   */
  children?: React.ReactNode;
  __designMode?: string;
  aos?: any;
}

const Link: React.FC<LinkProps> = (props) => {
  const {
    link,
    href,
    children = '默认链接',
    style,
    className,
    target,
    __designMode,
  } = props;

  let _href = href;

  if (__designMode) {
    _href = undefined;
  }

  let LinkRender: keyof JSX.IntrinsicElements = 'a';
  if (link && !! _href) {
    LinkRender = link;
  }

  const [dataAos] = useAos(props);

  return (
    <LinkRender {...dataAos} href={_href} style={style} className={className} target={target}>
      {children}
    </LinkRender>
  );
};
Link.displayName = 'Link';
export default Link;
