import React from 'react';
import { withRouter } from "react-router-dom";
import { Header } from './Header';

class _Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: '/',
      previousRoute: '/'
    }
  }

  componentDidMount() {
    const storedState = JSON.parse(localStorage.getItem('ReactRouterLocation'));
    if (storedState) {
      this.setState({
        route: storedState.route,
        previousRoute: storedState.previousRoute,
      });

      this.props.history.push(storedState.route);
    }

    this.unlisten = this.props.history.listen(this._storeState);
  }

  _storeState = (location) => {
    const route = location.pathname
    const state = {
      route,
      previousRoute: this.state.route
    };
    this.setState({
      route: state.route,
      previousRoute: state.previousRoute,
    });
    console.log(state);
    localStorage.setItem('ReactRouterLocation', JSON.stringify(state));
  }

  render() {
    return (
      <>

        <Header />
        <main>{this.props.children}</main>
      </>
    )
  }
}

export const Container = withRouter(_Container);
