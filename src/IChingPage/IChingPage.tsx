import React, {Component, Fragment} from 'react';
import { Hexagram } from '../utils';
import Hex from '../Hex';
import { HexContainer, IChingPageWrapper } from './IChingPage.css';

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
      </IChingPageWrapper>
    );
  }
}

export default IChingPage;
