// @flow
import React, { Fragment, memo } from 'react';

type Props = {
  src: string,
  alt: string,
};

const Avatar = ({ src, alt }: Props) => (
  <Fragment>
    <img src={src} alt={alt} />
    <style jsx>{`
      img {
        display: inline-block;
        border-radius: 100%;
        height: 8rem;
        width: 8rem;
        padding: 0.5rem;
        margin: 1rem 0;
      }
    `}</style>
  </Fragment>
);

export default memo<*>(Avatar);
