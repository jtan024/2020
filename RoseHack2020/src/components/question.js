
import React, { Component, Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import '../styles/global.css'



export default class Question extends Component {


  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);

  }
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <Flippy
        flipOnHover={false} // default false
        flipOnClick={true} // default false
        flipDirection="horizontal" // horizontal or vertical
        ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        style={{ position: 'relative',width: '500px', height: '60px', color: 'white', marginBottom: '30px' }} /// these are optional style, it is not necessary
      >
        <FrontSide
          style={{
            backgroundColor: '#603348',
          }}
        >
          {this.props.question}
        </FrontSide>
        <BackSide
          style={{ width: '300px', height: '300px', backgroundColor: '#603348', clear: 'both'}}>
          {this.props.answer}
        </BackSide>
      </Flippy>


    );
  }
}
