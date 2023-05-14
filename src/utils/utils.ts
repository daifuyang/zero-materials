import { useEffect } from 'react';

export const getAos = (aos: any) => {
  const dataAos: any = {};
  if (aos?.animation) {
    dataAos['data-aos'] = `${aos.animation}`;
    if (aos?.direction) {
      dataAos['data-aos'] += `-${aos.direction}`;
    }
  }

  if (aos?.delay) {
    dataAos['data-aos-delay'] = `${aos.delay}`;
  }

  if (aos?.easing) {
    dataAos['data-aos-easing'] = `${aos.easing}`;
  }
  return dataAos;
};

export const useAos = (props:any) => {
    const { __designMode, aos } = props;
    useEffect(() => {
      if (__designMode) {
        const AOS = require('aos');
        AOS.refreshHard();
      }
    }, [aos]);

    const dataAos = getAos(aos)

    return [dataAos]

  };
  
