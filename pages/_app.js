// @flow
import React from 'react';
import Layout from '../components/layout';

type Props = {
  Component: any,
  pageProps: Object,
};

export default ({ Component, pageProps }: Props) => (
  <Layout>
    <Component {...pageProps} />
    <style jsx global>{`
      *,
      *:before,
      *:after {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
          helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial,
          sans-serif;
        color: rgba(0, 0, 0, 0.8);
      }
    `}</style>
  </Layout>
);
