// @flow
import React, { memo, type Node } from 'react';
import Header from './header';
import Footer from './footer';

type Props = {
  children: Node,
};

const Layout = ({ children }: Props) => (
  <div className="page-wrapper">
    <Header />
    <div className="page-content">{children}</div>
    <Footer />

    <style jsx>{`
      .page-wrapper {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }
      .page-content {
        flex: 1;
      }
    `}</style>
  </div>
);

export default memo<*>(Layout);
