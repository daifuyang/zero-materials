import * as React from 'react';

interface RichTextProps {
  style: React.CSSProperties;
  html?: string;
}

const RichText: React.FC<RichTextProps> = (props: any) => {
  const { html, style, ...otherProps } = props;
  const defaultHtml = "<div style='height:200px'>你可以在右侧填写展示富文本内容</div>"
  // eslint-disable-next-line react/no-danger
  return <div style={style} {...otherProps} dangerouslySetInnerHTML={{ __html: html || defaultHtml }} />;
};

RichText.displayName = "RichText"
export default RichText;
