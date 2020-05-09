// @flow
import React, { Fragment, memo } from 'react';

type Props = {
  name: string,
  label: string,
};

const TextInput = ({ name, label, ...rest }: Props) => (
  <Fragment>
    <label htmlFor={name}>{label}</label>
    <input id={name} type="text" {...(rest: $Rest<Props, *>)} />
    <style jsx>{`
      label {
        display: block;
        font-size: 0.875rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
      }
      input {
        -webkit-appearance: none;
        -moz-appearance: none;
        display: block;
        width: 100%;
        border: 1px solid rgba(0, 0, 0, 0.2);
        padding: 0.5rem;
        margin-bottom: 0.5rem;
      }
      input::-moz-focus-inner {
        border: 0;
        padding: 0;
      }
    `}</style>
  </Fragment>
);

export default memo<*>(TextInput);
