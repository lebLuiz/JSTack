import React, { useEffect } from 'react';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

export default function Layout() {
  /* 2º Nesse useEffect é onde posso identificar o 'unmounted' q é feito lá no componente App.
  * Segue o conceito normal do useEffect, porém, onde identifico a "desmontagem" de fato, é
  * na função passada no `return`.
  */
  useEffect(() => {
    // console.debug({ selectedTheme });
    return () => {
      console.debug('<Layout/> saiu da tela.');
    }
  }, []);

  return (
    <>
      {
        // NOTE: Forçando error para cair em App.js `componentDidCatch`
        undefined.map(item => item)
      }
      <Header />
      <PostsList />
      <Footer />
    </>
  );
}
