import React from 'react';

interface LinkProps {
  href?: string;
  target: '_self' | '_blank' | '_parent' | '_top';
  style: React.CSSProperties;
  /**
   * 孩子节点
   */
  children?: React.ReactNode;
}

const Link: React.FC<LinkProps> = (props) => {

  const innerProps: any = {};
  if (!props.href?.trim() || props.__designMode === 'design') {
    // 解决低代码编辑器中按钮设置href属性造成按钮点击重定向问题
    innerProps.href = undefined;
  }

  const { children,style = {color:'#1677ff'}, ...otherProps } = props;
  
  return (
    <a style={style} {...otherProps} {...innerProps}>
      {children || '默认链接'}
    </a>
  );
};
export default Link;
