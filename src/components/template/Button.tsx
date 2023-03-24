import React, { FC,CSSProperties } from 'react';

interface TemplateProps {
  title: string;
  /**
   * 自定义样式
   */
  style?: CSSProperties;
}

const Template: FC<TemplateProps> = (props) => {
  const { title, style } = props;
  return (
    <button style={style} type="button" className="btn btn-primary">
      {title || '按钮'}
    </button>
  );
};

Template.displayName = 'Button';

export default Template;
