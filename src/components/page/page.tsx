import React, { FC, ReactNode, useEffect } from 'react';

interface PageProps {
  /**
   * 孩子节点
   */
  children?: ReactNode;
}

const Page: FC<PageProps> = (props: any) => {
  const { children, scripts } = props;

  useEffect(() => {
    const AOS = require('aos');
    const Parallax = require('parallax-js');
    const elements: any = document.getElementsByClassName('scene');
    for (let index = 0; index < elements.length; index++) {
      const item = elements[index];
      const res = new Parallax(item);
      console.log('res',res)
    }

    AOS.init();
  }, []);

  useEffect(() => {
    const head = document.querySelector('head');
    const elements: any = [];
    scripts.forEach((item: any) => {
      const script = document.createElement('script');
      script.setAttribute('src', item.script);
      head.appendChild(script);
      elements.push(script);
    });

    return () => {
      elements.forEach((element: any) => {
        head.removeChild(element);
      });
    };
  }, [scripts]);
  return <>{children}</>;
};

Page.displayName = 'Page';
export default Page;
