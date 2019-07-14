import styled from 'styled-components';
import React from 'react';

export const Straight = styled.div`
  height: 30px;
  width: 200px;
  background-color: darkslategrey;
  margin: 20px auto;
`;

export const StraightPlus = styled(Straight)`
  background-color: tomato;
`;

export const BrokenContainer = styled.div`
  display: flex;
  height: 30px;
  width: 200px;
  justify-content: space-between;
  margin: 20px auto;
`

export const BrokenSegment = styled.div`
  height: 100%;
  width: 33%;
  background-color: darkslategrey;
`;

export const BrokenSegmentPlus = styled(BrokenSegment)`
  background-color: tomato;
`;

export const Broken = () => (
  <BrokenContainer>
    <BrokenSegment/>

    <BrokenSegment/>
  </BrokenContainer>
);

export const BrokenPlus = () => (
  <BrokenContainer>
    <BrokenSegmentPlus/>

    <BrokenSegmentPlus/>
  </BrokenContainer>
);
