// @flow
import React, { Fragment, memo, type Node } from 'react';

type Props = {
  children: Node,
};

const Button = ({ children, ...rest }: Props) => (
  <Fragment>
    <button type="button" {...(rest: $Rest<Props, *>)}>
      {children}
    </button>
    <style jsx>{`
      button {
        display: inline-block;
        border-radius: 0.5rem;
        font-size: 0.875rem;
        padding: 0.5rem 1rem;
        margin-top: 1rem;
        color: #fff;
        background-color: #357edd;
        opacity: 1;
        transition: opacity 0.15s ease-in;
        cursor: pointer;
      }
      button:hover,
      button:focus {
        opacity: 0.5;
      }
    `}</style>
  </Fragment>
);

export default memo<*>(Button);
