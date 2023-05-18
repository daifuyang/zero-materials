import * as React from 'react';

interface RichTextProps {
  className?: string;
  style: React.CSSProperties;
  html?: string;
  forwardRef?: React.Ref<any>;
}

const RichText: React.FC<RichTextProps> = (props: any) => {
  const { html, className, style, forwardRef } = props;
  const defaultHtml = "<div style='height:200px'>你可以在右侧填写展示富文本内容</div>";
  // eslint-disable-next-line react/no-danger
  return (
    <div
      ref={forwardRef}
      className={className}
      style={style}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: html || defaultHtml }}
    />
  );
};

RichText.displayName = 'RichText';
export default RichText;
