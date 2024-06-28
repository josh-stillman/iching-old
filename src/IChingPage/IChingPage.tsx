import React, {Component, Fragment} from 'react';
import { Hexagram } from '../utils';
import Hex from '../Hex';
import { HexContainer, IChingPageWrapper, LinkContainer, Link, TextContainer } from './IChingPage.css';

interface State {
  hexagram: Hexagram;
  changingHex: Hexagram | null;
}

class IChingPage extends Component<any, State> {
  constructor (props: any){
    super(props);

    const hex = new Hexagram();

    this.state = {
      hexagram: hex,
      changingHex: hex.getChangingHex()
    }
  }

  render() {
    const { hexagram, changingHex } = this.state;

    return (
      <IChingPageWrapper>
        <HexContainer>
          <Hex hexagram={hexagram}/>

          {changingHex && <Hex hexagram={changingHex}/>}
        </HexContainer>
        <TextContainer>
          {hexagram.hexagramNumber}. {hexagram.hexagramName}
          <br/>
          <br/>
          {hexagram.text}
          {changingHex ? <><br/><h1>LINES:</h1> <ul>{hexagram.changingLinesText.map(line => <li>{line}<br/></li>)}</ul></> : ""}
          <br />
          <hr/>
          {changingHex && <>
            {changingHex.hexagramNumber}. {changingHex.hexagramName}
          <br/>
          <br/>
          {changingHex.text}
          </>}
        </TextContainer>
      </IChingPageWrapper>
    );
  }
}

export default IChingPage;
