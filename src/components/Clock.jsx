import { Component } from 'react';
import PropTypes from 'prop-types';

class Clock extends Component {
  // constructor(props) {
  //   super(props);
  //   // State always recieve object's data
  //   // To store Data
  //   this.state = {
  //     date: new Date(),
  //   };
  // }

  // Data Update from state this.setState({object}/ (state, props) =>{})

  state = {
    date: new Date(),
  };

  // Class based Lifecycle Events / Hooks

  componentDidMount() {
    this.clockTimer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  // this.setState() should update the Date data
  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <h1 className='heading'>
        <span className='text'>
          {this.state.date.toLocaleTimeString(this.props.locale)}
        </span>
      </h1>
    );
  }
}

export default Clock;

Clock.propTypes = {
  locale: PropTypes.string,
};
