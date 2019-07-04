import React, { Component } from 'react';
import { Hexagram, Line } from './utils';
import HexLine from './HexLine';

interface Props {
  hexagram: Hexagram;
}

const Hex = ({ hexagram }: Props) => (
  <div>
    {hexagram.getLinesDescending().map((line: Line) => <HexLine line={line}/>)}
  </div>
);

export default Hex;
