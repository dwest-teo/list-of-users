// @flow
import React, { memo } from 'react';
import svgPaths from './svg-paths';

type Props = {
  name: string,
  size?: number,
  fill?: string,
  viewBox?: string,
};

const Icon = ({ name, size, fill, viewBox }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    width={size}
    height={size}
    fill={fill}
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="1.414"
  >
    <path fillRule="nonzero" d={svgPaths[name]} />
  </svg>
);

Icon.defaultProps = {
  size: 32,
  fill: 'currentcolor',
  viewBox: '0 0 16 16',
};

export default memo<*>(Icon);
