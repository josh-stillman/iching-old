import React, { Component } from 'react';
import { Hexagram, Line } from './utils';

interface Props {
  line: Line;
}

const HexLine = ({ line }: Props) => {
  switch (line) {
    case Line.Broken:
      return <p>broken</p>
    case Line.BrokenPlus:
      return <p>brokenPlus</p>
    case Line.Straight:
      return <p>Straight</p>
    case Line.StraightPlus:
      return <p>StraightPlus</p>
    default:
      return <p>woops</p>
  }
};

export default HexLine;
