// @flow
import React, { Fragment, memo, type Node } from 'react';
import Header from './header';
import Footer from './footer';

type Props = {
  children: Node,
};

const Layout = ({ children }: Props) => (
  <Fragment>
    <Header />
    <div className="page-wrapper">{children}</div>
    <Footer />

    <style jsx>{`
      .page-wrapper {
        min-height: calc(100vh - 203px);
        display: flex;
        flex-direction: column;
      }
    `}</style>
  </Fragment>
);

export default memo<*>(Layout);
