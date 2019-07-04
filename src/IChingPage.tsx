import React, {Component, Fragment} from 'react';
import { Hexagram } from './utils';
import Hex from './Hex';

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

  componentDidMount() {
    // const hexagram = new Hexagram();
    // const changing = Hexagram.changing ? hexagram.getChangingHexagram : null;
    // this.setState({
    //   hexagram: new Hexagram(),
    // })
  }

  render() {
    const { hexagram, changingHex } = this.state;
    return (
      <div>
        <p>I ching</p>
        <p>{`${hexagram.hexagramNumber}: ${hexagram.hexagramName}`}</p>
        <Hex hexagram={hexagram}/>
        {changingHex &&(
          <Fragment>
            <p>{`${changingHex.hexagramNumber}: ${changingHex.hexagramName}`}</p>
            <Hex hexagram={changingHex}/>
          </Fragment>
        )}
      </div>
    );
  }
}

export default IChingPage;
