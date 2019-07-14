import styled from 'styled-components';

export const IChingPageWrapper = styled.div`
  background: url('/background1.jpg') repeat;
  background-size: cover;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HexContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  grid-column-gap: 100px;
  min-width: 200px;
  max-width: 550px;
  width: 100%;
  max-height: 100%;
`;
