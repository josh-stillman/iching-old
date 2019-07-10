import React from 'react';

import { Hexagram, Line } from './utils';
import HexLine from './HexLine';

interface Props {
  hexagram: Hexagram;
}

const Hex = ({ hexagram }: Props) => (
  <div>
    <p>{`${hexagram.hexagramNumber}: ${hexagram.hexagramName}`}</p>
    {hexagram.getLinesDescending().map((line: Line) => <HexLine line={line}/>)}
  </div>
);

export default Hex;
