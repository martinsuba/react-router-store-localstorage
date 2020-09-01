import React from 'react';
import { withRouter } from 'react-router-dom';

class _Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state1: props.prop1
    };
  }

  render() {
    return (
      <>
        <h1>Home</h1>
        <div>{this.state.state1}</div>
        <div>{this.props.location.pathname}</div>
        <div><button onClick={() => this.props.history.push('/dashboard')}>Go Dashboard</button></div>
        <div><button onClick={this.props.history.goBack}>Go Back</button></div>
      </>
    );
  }
}

export const Home = withRouter(_Home);
