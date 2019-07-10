import React from 'react';
import { Line } from './utils';
import { Straight, StraightPlus, Broken, BrokenPlus } from './Hexline.css';
interface Props {
  line: Line;
}

const HexLine = ({ line }: Props) => {
  switch (line) {
    case Line.Broken:
      return <Broken/>
    case Line.BrokenPlus:
      return <BrokenPlus/>
    case Line.Straight:
      return <Straight/>
    case Line.StraightPlus:
      return <StraightPlus/>
    default:
      return <p>woops</p>
  }
};

export default HexLine;
