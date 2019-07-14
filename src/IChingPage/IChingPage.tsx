import React, {Component, Fragment} from 'react';
import { Hexagram } from '../utils';
import Hex from '../Hex';
import { HexContainer, IChingPageWrapper, LinkContainer, Link } from './IChingPage.css';

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

        <LinkContainer>
          <Link href="https://amzn.to/2lj00j1" target="_blank">The Book</Link>

          <Link href="https://amzn.to/2jS6mW5" target="_blank">The Modern Commentary</Link>
        </LinkContainer>
      </IChingPageWrapper>
    );
  }
}

export default IChingPage;
