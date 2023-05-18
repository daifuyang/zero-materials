/* eslint-disable @typescript-eslint/no-require-imports */
import { Component } from 'react';

interface PageProps {
  scripts: any;
  children: React.ReactNode
}

class Page extends Component<PageProps> {
  static displayName = 'Page';
  elements: any
  constructor(props: PageProps) {
    super(props);
    this.elements = []
  }

  componentDidMount() {

  }

  componentDidUpdate(): void {
    const AOS = require('aos');
    const Parallax = require('parallax-js');
    const elements: any = document.getElementsByClassName('scene');
    for (let index = 0; index < elements.length; index++) {
      const item = elements[index];
      // eslint-disable-next-line no-new
     new Parallax(item);
    }
    AOS.init()

    const { scripts } = this.props;
    const head = document.querySelector('head');
    scripts?.forEach?.((item: any) => {
      const script:any = document.createElement('script');
      script.setAttribute('src', item.script);
      head.appendChild(script);
      this.elements.push(script);
    });
  }

  componentWillUnmount(): void {
    const head = document.querySelector('head');
    this.elements.forEach((element: any) => {
      head.removeChild(element);
    });
  }

  render() {
    return this.props.children;
  }

}

// const Page: React.FC<PageProps> = (props: any) => {
//   const { children, scripts } = props;

//   useEffect(() => {

//     return () => {
//       elements.forEach((element: any) => {
//         head.removeChild(element);
//       });
//     };
//   }, [scripts]);
//   return <>{children}</>;
// };

export default Page;
