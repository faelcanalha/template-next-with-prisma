'use client';

import 'aos/dist/aos.css';

import Aos from 'aos';
import { useEffect } from 'react';

export function AOS() {
  useEffect(() => {
    Aos.init();
  }, []);

  return <></>;
}
