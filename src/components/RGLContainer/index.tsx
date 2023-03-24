import React, {
  forwardRef,
  Children,
  isValidElement,
  cloneElement,
} from 'react';
import RGL, { WidthProvider } from 'react-grid-layout';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ReactGridLayout = WidthProvider(RGL);

const PLACEHOLDERKEY = 'placeholdkey';

const RGLContainer = forwardRef<HTMLDivElement, any>((props: any, ref) => {
  const {
    children,
    layout = [{ i: PLACEHOLDERKEY, x: 0, y: 0, w: 12, h: 10, static: true }],
    style = {},
    className,
  } = props;

  const mappedChildren = Children.map(children, (child: any) => {
    let { key,dataGrid } = child;
    if (child?.props?.className === 'lc-container-placeholder') {
      key = PLACEHOLDERKEY;
      dataGrid = {x: 0, y: 0, w: 12, h: 3, static: true}
    }

    if (!isValidElement(child)) {
      return null;
    }
    return cloneElement(<div className='react-grid-item-scroll' data-key={key} data-grid={dataGrid} key={key}>{child}</div>);
  });

  return (
    <div id='rgl' ref={ref} style={{ ...style, position: 'relative' }} className={className}>
      <ReactGridLayout
        {...props}
        className="layout"
        layout={layout}
      >
        {mappedChildren}
      </ReactGridLayout>
    </div>
  );
});

RGLContainer.displayName = 'RGLContainer';

export default RGLContainer;
