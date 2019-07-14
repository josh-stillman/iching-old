import React from 'react';

import { Hexagram, Line } from './utils';
import HexLine from './HexLine';
import { HexagramWrapper, Title } from './Hex.css';

interface Props {
  hexagram: Hexagram;
}

const Hex = ({ hexagram }: Props) => (
  <HexagramWrapper>
    <Title>{`${hexagram.hexagramNumber}: ${hexagram.hexagramName}`}</Title>

    {hexagram.getLinesDescending().map((line: Line) => <HexLine line={line}/>)}
  </HexagramWrapper>
);

export default Hex;
